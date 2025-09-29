import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 text-center">
      {/* Big 404 number */}
      <h1 className="text-8xl sm:text-9xl font-extrabold mb-4 text-gray-900">
        404
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 max-w-lg">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
