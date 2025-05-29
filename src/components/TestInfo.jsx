// src/components/TestInfo.jsx
import React from 'react';

export default function TestInfo() {
  return (
    <section className="container my-5">
      <h2>Test Instructions</h2>
      <ul className="list-disc ml-5">
        <li>Design a website using React.js and any CSS framework.</li>
        <li>Deploy on GitHub Pages, Netlify, Vercel, etc., and share the URL.</li>
        <li><strong>Date:</strong> 29th May 2025</li>
        <li><strong>Time:</strong> 10:00 AM – 11:00 AM</li>
        <li>Use only a laptop or desktop (no mobile/tablets).</li>
        <li>No extra time for late submissions.</li>
        <li>Use the same email as your application.</li>
        <li>Ensure a stable internet connection.</li>
      </ul>
    </section>
  );
}

