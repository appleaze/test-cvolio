// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          MyPortfolio
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-indigo-600">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
