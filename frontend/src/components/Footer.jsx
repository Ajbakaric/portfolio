import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-6 bg-gray-50">
      &copy; {new Date().getFullYear()} Austin Bakaric. All rights reserved.
    </footer>
  );
}
