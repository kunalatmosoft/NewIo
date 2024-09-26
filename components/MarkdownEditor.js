"use client"; // Enable client-side rendering for this component

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'react-markdown-editor-lite/lib/index.css';
import MdEditor from 'react-markdown-editor-lite';

// Markdown editor component
const MarkdownEditor = ({ onChange }) => {
  const [markdown, setMarkdown] = useState('');

  // Function to handle editor changes
  const handleEditorChange = ({ text }) => {
    setMarkdown(text);  // Update markdown content
    onChange(text);     // Notify parent about content change
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Markdown Editor</h2>

      {/* Markdown Editor */}
      <MdEditor
        value={markdown}
        style={{ height: '400px', width: '100%' }}
        renderHTML={(text) => <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>}
        onChange={handleEditorChange}
      />

      {/* Markdown Preview */}
      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-2">Preview</h2>
        <div className="p-4 border rounded-md mt-4 bg-white">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
