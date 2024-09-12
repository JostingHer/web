'use client'
import React, { useState } from 'react';

const CopyEmailButton = () => {
  const [email] = useState('correo@gmail.com'); // Correo electrónico fijo

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <input
        placeholder='copy'
        type="text"
        value={email}
        readOnly
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 text-center"
      />
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Copy
      </button>
    </div>
  );
};

export default CopyEmailButton;
