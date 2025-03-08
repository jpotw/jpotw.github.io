import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function Home() {
  const posts = await getAllPosts();
  const recent_posts = posts.slice(0, 5);

  return (
    <div className="space-y-12 sm:space-y-16 py-4 sm:py-8">
      <section className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl md:text-3xl font-normal">recent thoughts</h1>
      </section>

      <section className="space-y-8 sm:space-y-12">
        {recent_posts.length > 0 ? (
          posts.map(post => (
            <article key={post.slug} className="space-y-2 sm:space-y-3">
              <time className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{post.date}</time>
              <h2 className="text-xl sm:text-2xl font-medium leading-tight">
                <Link href={`/posts/${post.slug}`} className="hover:underline">{post.title}</Link>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <div>
                <Link href={`/posts/${post.slug}`} className="text-sm sm:text-base text-[#ccbbac] hover:underline">
                  continue reading →
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
            No posts found.
          </p>
        )}
      </section>
    </div>
  );
}