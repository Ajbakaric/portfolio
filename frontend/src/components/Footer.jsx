import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 bg-gray-50 dark:bg-[#0a0a1a]">
      <div>&copy; {new Date().getFullYear()} Austin Bakaric. All rights reserved.</div>

      <p className="text-xs mt-2">
        Cube animation by{' '}
        <a
          href="https://www.framer.com/motion/use-animation-frame/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Matt Perry
        </a>{' '}
        using <code>useAnimationFrame</code> from Framer Motion.
      </p>

      <p className="text-xs mt-1">
        Background photo by{' '}
        <a
          href="https://unsplash.com/@hjrivas87"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Héctor J. Rivas
        </a>{' '}
        on{' '}
        <a
          href="https://unsplash.com/photos/1FxMET2U5dU"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Unsplash
        </a>
        .
      </p>
    </footer>
  );
}
