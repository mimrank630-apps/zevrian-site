/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://zevrian.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://zevrian.com'}/sitemap.xml`,
    ],
  },
  changefreq: 'monthly',
  priority: 0.7,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/brand'),
    await config.transform(config, '/products'),
    await config.transform(config, '/amazon-excellence'),
    await config.transform(config, '/suppliers'),
    await config.transform(config, '/quality'),
    await config.transform(config, '/vision'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/privacy-policy'),
    await config.transform(config, '/terms-of-service'),
  ],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/products': 0.9,
      '/contact': 0.9,
      '/about': 0.7,
      '/brand': 0.7,
      '/amazon-excellence': 0.7,
      '/suppliers': 0.7,
      '/quality': 0.7,
      '/vision': 0.7,
      '/privacy-policy': 0.5,
      '/terms-of-service': 0.5,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
