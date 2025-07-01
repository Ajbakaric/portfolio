import React from 'react';
import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
    <section id="resume" className="w-full px-6 py-20 bg-white dark:bg-[#0e0f2c] text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-6">My Resume</h2>
      <p className="mb-6">Click below to download a copy of my resume.</p>
      <a
        href="/Austin_Bakaric_Resume.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-500 transition"
      >
        <FaDownload />
        Download Resume
      </a>
    </section>
  );
}
