export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://belal-bahaa.vercel.app/sitemap.xml",
  };
}
