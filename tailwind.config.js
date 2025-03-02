/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['var(--font-spectral)', 'Georgia', 'serif'],
          sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              color: 'var(--foreground)',
              a: {
                color: 'inherit',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                fontWeight: '400',
              },
              h1: {
                fontWeight: '400',
                letterSpacing: '-0.025em',
              },
              h2: {
                fontWeight: '400',
                letterSpacing: '-0.025em',
              },
              blockquote: {
                fontWeight: '400',
                fontStyle: 'italic',
                color: 'var(--foreground)',
                borderLeftColor: 'var(--muted)',
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }