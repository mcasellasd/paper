import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Exclude large files from serverless function output file tracing
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        // Exclude large PDF files (accessed dynamically at runtime)
        'lib/biblioteca/**/*.pdf',
        'lib/biblioteca/**/*.epub',
        'lib/biblioteca/**/*.acsm',
        // Exclude git repository
        '.git/**/*',
        // Exclude build cache
        '.next/cache/**/*',
      ],
    },
  },
};

export default withNextIntl(nextConfig);

