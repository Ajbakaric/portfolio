import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 bg-white py-6 shadow-inner">
      <div className="text-gray-600">
        &copy; {new Date().getFullYear()} Austin Bakaric. All rights reserved.
      </div>

      <p className="text-xs mt-2 text-gray-500">
        Cube animation by{' '}
        <a
          href="https://app.spline.design/community/file/02cb429e-740b-43c8-a4e6-97ee6de7f9f8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Sanket Khairnar
        </a>{' '}
        using Spline.
      </p>

      <p className="text-xs mt-1 text-gray-500">
        Background photo by{' '}
        <a
          href="https://unsplash.com/@_debs_"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Debora Pilati
        </a>{' '}
        on{' '}
        <a
          href="https://unsplash.com/photos/blue-and-white-striped-textile-dOG0z4-gqp0"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Unsplash
        </a>
        .
      </p>

      <p className="text-xs mt-1 text-gray-500">
        Email icon by{' '}
        <a
          href="https://pixabay.com/users/Clker-Free-Vector-Images-3736/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Clker-Free-Vector-Images
        </a>{' '}
        on{' '}
        <a
          href="https://pixabay.com/vectors/letter-icon-email-message-mail-1132703/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Pixabay
        </a>
        .
      </p>
    </footer>
  );
}
