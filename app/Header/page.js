import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center px-2">
          <Link href="/">
            <img src="Logo.png" alt="Logo portfolio" className="h-10 w-auto" />
          </Link>
        </div>
        <ul className="flex space-x-20 px-12">
          <li><Link href="/" className="hover:text-gray-400">Accueil</Link></li>
          <li><Link href="/Project1" className="hover:text-gray-400">Projet Gestion Hotel</Link></li>
          <li><Link href="/Project2" className="hover:text-gray-400">Projet Gestion Hopital</Link></li>
          <li><Link href="/Contact" className="hover:text-gray-400">Contactez-moi</Link></li>
          <li><Link href="/Testimonials" className="hover:text-gray-400">Liste des Témoignages</Link></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
