import { SignedOut, SignInButton } from '@clerk/nextjs';
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full border border-gray-200">
        <SignedOut>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Bienvenue dans mon portfolio</h1>
          <div className="flex justify-center">
            <SignInButton className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Se connecter
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;
