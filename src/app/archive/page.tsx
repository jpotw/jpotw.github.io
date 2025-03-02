import { getPostsByYear } from '@/lib/posts';
import Link from 'next/link';

export default async function Archive() {
  const archiveByYear = await getPostsByYear();
  const years = Object.keys(archiveByYear).sort((a, b) => parseInt(b) - parseInt(a)); // Sort years in descending order

  return (
    <div className="py-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-10">archive</h1>
      
      {years.length > 0 ? (
        years.map(year => (
          <div key={year} className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">{year}</h2>
            <ul className="space-y-3 sm:space-y-4">
              {archiveByYear[year].map(post => (
                <li key={post.slug} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <Link href={`/posts/${post.slug}`} className="text-lg sm:text-xl hover:underline mb-1 sm:mb-0">
                    {post.title}
                  </Link>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 tabular-nums">
                    {post.date.split(' ')[0]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
          No posts found. Create a post by adding an MDX file to the content/posts directory.
        </p>
      )}
    </div>
  );
}