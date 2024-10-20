// components/AboutMeSection.tsx
import Link from 'next/link';
import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          Hi, I&apos;m [Your Name], a passionate software engineer and AI enthusiast. 
          I love working on innovative projects and applying my knowledge in AI and full-stack development.
        </p>
        {/* Remove <a> and apply the className directly to Link */}
        <Link href="/about" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutMeSection;
