import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all existing post slugs
export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for the post
export async function generateMetadata(props: PostPageProps) {
  // We need to await the params object itself in Next.js 15+
  const params = await props.params;
  const slug = params.slug;
  
  if (!slug) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }
  
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage(props: PostPageProps) {
  // We need to await the params object itself in Next.js 15+
  const params = await props.params;
  const slug = params.slug;
  
  if (!slug) {
    notFound();
  }
  
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="prose dark:prose-invert prose-gray mx-auto px-2 sm:px-0">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 leading-tight">{post.title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-base">
          <time>{post.date}</time>
          {post.readingTime && (
            <span className="hidden sm:inline">· {post.readingTime}</span>
          )}
        </div>
      </div>
      
      <div className="prose-base sm:prose-lg prose-neutral dark:prose-invert max-w-full">
        <div 
          dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
          className="[&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:mt-8 [&>h2]:mb-4 
                     [&>p]:text-lg [&>p]:sm:text-xl [&>p]:leading-relaxed [&>p]:mb-4
                     [&>ul]:pl-5 [&>ol]:pl-5 [&>blockquote]:text-base [&>blockquote]:sm:text-lg"
        />
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <Link href="/" className="text-base text-[#ccbbac] hover:underline">← Back to all posts</Link>
      </div>
    </article>
  );
} 