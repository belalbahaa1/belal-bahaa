export default function sitemap() {
  const baseUrl = "https://belal-bahaa.vercel.app";

  // Add paths here
  const paths = ["", "/work"];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
