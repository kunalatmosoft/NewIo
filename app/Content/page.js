"use client"; // Enable client-side rendering for this component

import Head from 'next/head';
import { useState } from 'react';
import MarkdownEditor from '@/components/MarkdownEditor';
import { saveAs } from 'file-saver';

export default function Home() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Helper function to calculate total word count
  const calculateWordCount = (content) => {
    const wordsArray = content.trim().split(/\s+/).filter(word => word.length > 0);
    return wordsArray.length;
  };

  const handleContentChange = (content) => {
    setMarkdownContent(content);
    const words = calculateWordCount(content);
    setWordCount(words);
  };

  const saveFile = () => {
    if (markdownContent.trim() === '') {
      alert('No content to save!');
      return;
    }

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'content.md');
    setIsModalOpen(true); // Open the modal after saving
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Content Writing Platform</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
        <div className="w-full max-w-5xl p-10 bg-white bg-opacity-90 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 drop-shadow-lg">
            AtmoWrite&trade;
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Write, preview, and save your markdown content effortlessly.
          </p>

          {/* Markdown Editor */}
          <MarkdownEditor onChange={handleContentChange} />

          {/* Total Word Count */}
          <div className="mt-4 flex justify-between text-gray-600">
            <p className="font-semibold">Total Word Count: {wordCount}</p>
            <p className="font-semibold">{markdownContent ? `${markdownContent.length} Characters` : '0 Characters'}</p>
          </div>

          {/* Save as Markdown Button */}
          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              onClick={saveFile}
            >
              Save as Markdown
            </button>
          </div>
        </div>

        {/* Success Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-center">Success!</h2>
              <p className="text-gray-600 text-center mb-4">Your Markdown file has been saved successfully.</p>
              <div className="flex justify-center">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}




/* import React from 'react'
import Navbar from '@/components/Navbar'
const Content = () => {
  return (
<>
<Navbar/>
<p className='text-3xl text-teal-600 p-5'>Contents</p>
<p className='p-5'>Select the domain!</p>
<ol className='text-teal-600 font-sans  p-5'>
    <li className='hover:text-teal-900 cursor-pointer'>WEB_DEVELOPMENT</li>
    <li className='hover:text-teal-900 cursor-pointer'>AI/ML</li>
    <li className='hover:text-teal-900 cursor-pointer'>SYSTEM_DESIGN</li>
    <li className='hover:text-teal-900 cursor-pointer'>DSA</li>
</ol>
</>

)
}

export default Content */