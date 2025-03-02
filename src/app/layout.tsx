import type { Metadata } from "next";
import { Inter, Spectral } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-spectral',
});

export const metadata: Metadata = {
  title: "Junu Thoughts",
  description: "A collection of personal thoughts and reflections",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spectral.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-serif min-h-screen bg-[#FFFBF5] dark:bg-black">
        <div className="px-2 md:px-4 lg:px-12 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <header className="py-6 sm:py-8 md:py-12">
              <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                <a href="/" className="text-2xl md:text-4xl font-normal tracking-tight text-[#ccbbac]">Junu thoughts</a>
                <div className="flex space-x-6 text-base">
                  <a href="/about" className="text-2xl md:text-3xl text-[#ccbbac]">about</a>
                  <a href="/archive" className="text-2xl md:text-3xl hover:underline text-[#ccbbac]">archive</a>
                </div>
              </nav>
            </header>
            <main className="pb-12">{children}</main>
            <footer className="py-6 sm:py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
              <div className="text-base text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()}
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}