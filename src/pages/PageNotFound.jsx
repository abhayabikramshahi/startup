import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#C382CC] via-[#3A0763] to-[#240745] bg-clip-text text-transparent mb-6">
        404
      </h1>
      <p className="text-xl md:text-2xl mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-[#090621] via-[#240745] to-[#3A0763] rounded-full font-semibold hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
