import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <p className="text-gray-400">Email: your-email@example.com</p>
            <p className="text-gray-400">Phone: +123 456 789</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-400">
              <li>
                <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://github.com/your-profile" className="hover:text-indigo-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-profile" className="hover:text-indigo-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/your-profile" className="hover:text-indigo-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
