const redirects = [
  {
    source: '/twitter',
    destination: 'https://twitter.com/roman_vanesyan',
    statusCode: 301
  },
  {
    source: '/github',
    destination: 'https://github.com/roman-vanesyan',
    statusCode: 301
  },
  {
    source: '/blog',
    destination: 'https://romanvanesyan.com',
    statusCode: 301
  },
  {
    source: '/unsplash',
    destination: 'https://unsplash.com/@roman_vanesyan',
    statusCode: 301
  },
  {
    source: '/instagram',
    destination: 'https://instagram.com/roman_vanesyan',
    statusCode: 301
  },
  {
    source: '/linkedin',
    destination: 'https://www.linkedin.com/in/roman-vanesyan',
    statusCode: 301
  },
  {
    source: '/twitch',
    destination: 'https://twitch.tv/roman_vanesyan',
    statusCode: 301
  },
  {
    source: '/youtube',
    destination: 'https://youtube.com/@roman_vanesyan',
    statusCode: 301
  },
  {
    source: '/onlyfans',
    destination: 'https://youtu.be/dQw4w9WgXcQ',
    statusCode: 301
  }
];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },

  async redirects() {
    return redirects;
  }
};

export default config;
