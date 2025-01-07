'use client';

import { useState } from 'react';

export default function FreakFontConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy');

  const convertToFreakyFont = (input: string) => {
    return Array.from(input).map(c => {
      const charCode = c.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCodePoint(120042 + charCode - 97);
      } else if (charCode >= 65 && charCode <= 90) {
        return String.fromCodePoint(119808 + charCode - 65);
      } else {
        return c;
      }
    }).join('');
  };

  const handleConvert = () => {
    const result = convertToFreakyFont(input);
    setOutput(result);
    setCopyStatus('Copy'); // 重置复制按钮状态
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000); // 2秒后重置状态
    } catch (err) {
      console.error('Failed to copy text:', err);
      setCopyStatus('Failed to copy');
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
      <div className="mb-4">
        <label htmlFor="input" className="block text-sm font-medium mb-2">
          Enter your text:
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-md text-white"
          rows={4}
          placeholder="Type your text here..."
        />
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium">
            Freaky font result:
          </label>
          {output && (
            <button
              onClick={handleCopy}
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
            >
              {copyStatus}
            </button>
          )}
        </div>
        <div className="w-full p-3 bg-gray-700 rounded-md min-h-[100px] text-white">
          {output}
        </div>
      </div>
      
      <button 
        onClick={handleConvert}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Convert to Freaky Font
      </button>
    </div>
  );
} 