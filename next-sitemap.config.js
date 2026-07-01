/** @type {import('next-sitemap').IConfig} */
// siteUrl derives from the same NEXT_PUBLIC_SITE_URL used by src/lib/utils.ts
// (SITE.url) so canonical tags, JSON-LD, and the sitemap can never drift apart.
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.concreteprosdallas.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "monthly";

    if (path === "/") {
      priority = 1.0;
    } else if (path === "/services" || path.startsWith("/services/")) {
      priority = 0.9;
    } else if (path.startsWith("/service-areas/")) {
      priority = 0.8;
    } else if (path === "/gallery" || path === "/contact") {
      priority = 0.7;
    } else if (path === "/privacy-policy" || path === "/terms-of-service") {
      priority = 0.3;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
