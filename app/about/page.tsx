// pages/about.tsx
import Link from 'next/link';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        {/* Add more detailed information about yourself here */}
        <p className="text-lg text-gray-700 mb-6">
          Hello! I'm [Your Name], a software engineer with a passion for artificial intelligence and machine learning. 
          I have experience working on a variety of projects, including speech emotion recognition, image classification, 
          and full-stack web development.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          My journey in AI started during my university years where I learned about deep learning, computer vision, 
          and natural language processing. Since then, I’ve been actively involved in developing applications that 
          combine these technologies with modern software engineering practices.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          I'm proficient in technologies such as Next.js, React, Tailwind CSS, Python, TensorFlow, and PyTorch.
          Feel free to check out my projects below or get in touch with me if you want to collaborate on something exciting!
        </p>
        
        {/* Remove the <a> tag and apply the className directly */}
        <Link href="/" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
