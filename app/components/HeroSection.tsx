import React from 'react';

const HeroSection: React.FC = () => {
  return (
  <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen flex flex-col justify-center items-center pt-16">
    <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m [Your Name]</h1>
    <p className="text-2xl mb-8">Machine Learning Enthusiast & Full-Stack Developer</p>
    <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
        View My Work
    </a>
    </section>
  );
};

export default HeroSection;
