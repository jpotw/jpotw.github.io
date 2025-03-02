import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { promises as fsPromises } from 'fs';
import { remark } from 'remark';
import html from 'remark-html';

// Define the posts directory path
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// Define the Post type
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  readingTime?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
};

// Get all post slugs
export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fsPromises.readdir(postsDirectory);
    return files
      .filter((file: string) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file: string) => file.replace(/\.(mdx|md)$/, ''));
  } catch (error) {
    console.error('Error getting post slugs:', error);
    return [];
  }
}

// Process markdown to HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html)
    .process(markdown);
  return result.toString();
}

// Get post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Try with .mdx extension first
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileExists = false;
    
    try {
      await fsPromises.access(fullPath);
      fileExists = true;
    } catch {
      // If .mdx doesn't exist, try .md
      fullPath = path.join(postsDirectory, `${slug}.md`);
      try {
        await fsPromises.access(fullPath);
        fileExists = true;
      } catch {
        return null;
      }
    }
    
    if (!fileExists) {
      return null;
    }
    
    const fileContents = await fsPromises.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const htmlContent = await markdownToHtml(content);
    
    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200) + ' min read';
    
    return {
      slug,
      title: data.title || slug,
      date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : 'Unknown date',
      excerpt: data.excerpt || '',
      content,
      htmlContent,
      readingTime,
      tags: data.tags || [],
      author: data.author || undefined,
      featured: data.featured || false
    };
  } catch (error) {
    console.error(`Error getting post by slug '${slug}':`, error);
    return null;
  }
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const postsPromises = slugs.map(slug => getPostBySlug(slug));
  const posts = (await Promise.all(postsPromises)).filter((post): post is Post => post !== null);
  
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Sort by date in descending order
  });
}

// Get posts by year
export async function getPostsByYear(): Promise<Record<string, Post[]>> {
  const posts = await getAllPosts();
  const postsByYear: Record<string, Post[]> = {};
  
  posts.forEach(post => {
    const year = new Date(post.date).getFullYear().toString();
    
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    
    postsByYear[year].push(post);
  });
  
  return postsByYear;
} 