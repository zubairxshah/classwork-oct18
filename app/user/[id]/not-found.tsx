'use client'; // This is necessary for using hooks in a Server Component

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const UserNotFound: React.FC = () => {
  const params = useParams();
  const userId = params?.id || 'Unknown';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4 animate-bounce">
          404
        </h1>
        <p className="text-4xl font-semibold text-white mb-4 animate-pulse">
          User Not Found
        </p>
        <p className="text-xl text-white mb-4">
          Oops! The user with ID {userId} doesn&apos;t exist.
        </p>
        <Link 
          href="/user"
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Back to Users
        </Link>
      </div>
    </div>
  );
};

export default UserNotFound;
