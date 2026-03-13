const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Belal Bahaa",
    url: "https://belal-bahaa.vercel.app/",
    jobTitle: "MERN Stack Developer",
    sameAs: [
      "https://github.com/belalbahaa1",
      "https://www.linkedin.com/in/belal-bahaa-612aa73a2/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Web Development",
    ],
    description:
      "Belal Bahaa is a MERN Stack Developer specializing in high-performance web applications with React, Next.js, and Tailwind CSS.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
