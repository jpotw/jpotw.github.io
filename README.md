This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Blog System

This blog is built with Next.js and uses MDX for content management. It features:

1. Dynamic post routing based on MDX filenames
2. Frontmatter for metadata management
3. Automatic reading time calculation
4. Categorization by year in the archive
5. Responsive design for mobile and desktop
6. Support for tags, authors, and featured posts

### Mobile Responsiveness

The blog is fully responsive and optimized for all device sizes:

- Fluid typography that scales appropriately for different screen sizes
- Responsive layout that adapts to mobile, tablet, and desktop
- Touch-friendly navigation and interaction elements
- Optimized reading experience on small screens
- Properly scaled images and content

### Post Management

Blog posts are stored as MDX files in the `src/content/posts` directory. To create a new post:

1. Create a new `.mdx` file in the `src/content/posts` directory
2. The filename will become the URL slug (e.g., `my-post.mdx` becomes `/posts/my-post`)
3. Add frontmatter at the top of the file:

```
---
title: Your Post Title
date: YYYY-MM-DD
excerpt: A brief summary of your post
tags: ["tag1", "tag2"]  # Optional
author: Your Name        # Optional
featured: true           # Optional
---
```

4. Write your content using Markdown syntax

The site will automatically:
- Display posts on the home page, sorted by date
- Add posts to the archive, organized by year
- Create dedicated pages for each post with proper metadata

### Content Structure

- `src/content/posts/`: Contains all blog post MDX files
- `src/lib/posts.ts`: Utility functions for managing posts
- `src/app/posts/[slug]/`: Dynamic route for individual posts
- `src/app/page.tsx`: Home page showing recent posts
- `src/app/archive/page.tsx`: Archive page organizing posts by year

### Adding Features

To add new features to posts, edit the `src/lib/posts.ts` file to include additional metadata in the `Post` type and processing functions.

### GitHub Pages Deployment

This blog is configured to automatically deploy to GitHub Pages using GitHub Actions. The deployment process:

1. Builds the Next.js application with static export
2. Creates necessary files for GitHub Pages (.nojekyll, CNAME, 404.html)
3. Pushes the built files to the `gh-pages` branch
4. Deploys the site to GitHub Pages

To manually trigger a deployment, simply push changes to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy the site. The deployment can take up to 10 minutes to propagate.
