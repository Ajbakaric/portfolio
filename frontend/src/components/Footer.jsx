import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 bg-gray-50 dark:bg-[#0a0a1a]">
      <div>
        &copy; {new Date().getFullYear()} Austin Bakaric. All rights reserved.
      </div>
      <p className="text-xs mt-2">
        Background photo by{' '}
        <a
          href="https://unsplash.com/@hjrivas87"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Héctor J. Rivas
        </a>{' '}
        on{' '}
        <a
          href="https://unsplash.com/photos/1FxMET2U5dU"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </p>
    </footer>
  );
}
