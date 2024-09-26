'use client'; // Next.js Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent shadow-lg rounded-b-full mx-auto w-11/12 lg:w-2/3 mt-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          <Link href="/">
            NewIo
          </Link>
        </div>

        {/* Nav Links (for larger screens) */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-200 hover:text-green-400">
            Home
          </Link>
          <Link href="/about" className="text-gray-200 hover:text-green-400">
            About
          </Link>
          <Link href="/services" className="text-gray-200 hover:text-green-400">
            Services
          </Link>
          <Link href="/contact" className="text-gray-200 hover:text-green-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            className="text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when `isOpen` is true) */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-2 space-y-2 bg-gray-900 rounded-b-sm shadow-lg">
          <Link href="/" className="block text-gray-200 hover:text-green-400">
            Home
          </Link>
          <Link href="/about" className="block text-gray-200 hover:text-green-400">
            About
          </Link>
          <Link href="/services" className="block text-gray-200 hover:text-green-400">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-200 hover:text-green-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
