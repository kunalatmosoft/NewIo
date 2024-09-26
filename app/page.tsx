import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <>
            <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to NewIo 👋
          </h1>
          <p className="text-lg mb-6 px-5">
            Unlock your potential with our platform where you can access hundreds of free tutorials, articles, and courses from experts in the field.
          </p>
          <Link href="/Content"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300">
              Start Learning Now
            
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Why Choose NewIo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            <div className="bg-gray-800 rounded-lg p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Expert Content</h3>
              <p>
                Learn from industry leaders and experienced professionals through well-structured courses and articles.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Free & Accessible</h3>
              <p>
                All our resources are available for free, accessible anytime, anywhere, from any device.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
              <p>
                Engage with quizzes, projects, and an active community to reinforce your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            What Our Learners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
              <p className="italic">
                NewIo has completely changed the way I study. The content is top-notch and easy to understand.
              </p>
              <p className="mt-4 text-teal-400">- Sarah T.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
              <p className="italic">
                The courses here have helped me improve my coding skills significantly. Highly recommended!
              </p>
              <p className="mt-4 text-teal-400">- Michael S.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
              <p className="italic">
                I love the interactive quizzes and community engagement. It makes learning fun and effective.
              </p>
              <p className="mt-4 text-teal-400">- Kunal Singh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-teal-400">
              NewIo
            </div>
            <div className="space-x-6">
              <Link href="/"
                className="hover:text-teal-400">Home
              </Link>
              <Link href="/about"
                className="hover:text-teal-400">About Us
              </Link>
              <Link href="/contact"
                className="hover:text-teal-400">Contact
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NewIo. All Rights Reserved.
          </div>
        </div>
      </footer>
                </div>
    </>
  );
};

export default Home;

