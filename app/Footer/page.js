import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Création et design fait par : Elarchi Bilal © 2024</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/2701699" className="text-green-400 hover:text-gray-400">GITHUB</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/bilal-elarchi-95843b122/" className="text-green-400 hover:text-gray-400">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
