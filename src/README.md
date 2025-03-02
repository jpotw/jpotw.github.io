# Next.js Blog Source Code

This directory contains the source code for the Next.js blog application.

## Directory Structure

- `app/`: Contains the Next.js App Router pages and layouts
- `components/`: Reusable React components used throughout the application
- `content/`: MDX blog posts and other content
- `lib/`: Utility functions and helpers

## Key Files

- `app/page.tsx`: The home page of the blog
- `app/posts/[slug]/page.tsx`: Dynamic route for individual blog posts
- `app/archive/page.tsx`: Archive page showing posts organized by year
- `lib/posts.ts`: Utility functions for fetching and processing blog posts
- `components/PostCard.tsx`: Component for displaying post previews

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 