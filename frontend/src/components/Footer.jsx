import React from 'react';

export default function Footer() {
  return (
   <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 bg-gray-50 dark:bg-[#0a0a1a]">
  &copy; {new Date().getFullYear()} Austin Bakaric. All rights reserved.
</footer>

  );
}
