import React from 'react';
import './Project2.css';

function Project2() {
  return (
    <div className="bg-gray-100 py-8 px-4">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
      Projet gestion d'Hôpital
    </h1>
    <div className="project-content mb-8">
      <p className="text-gray-700 mb-4 text-center">
        Lien Vers le Repository sur : 
        <a href="https://github.com/2701699/Gestion-Hopital/tree/master" className="text-yellow-500 hover:text-green-700 ml-1">GITHUB</a>
      </p>
      <div className="flex justify-center">
        <img src='hopital.png' alt="projet Hopital" className="w-64 h-auto rounded-lg shadow-md"/>
      </div>
    </div>
  
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Description du projet</h2>
        <p className="text-gray-700 leading-relaxed">
          Ce projet consiste en une application desktop, elle permet la gestion d'un hôpital et des acteurs qui y travaillent. 
          On peut gérer les médecins en ajoutant, supprimant et modifiant leurs informations, ainsi que les patients.
          Cette application permet de gérer les rendez-vous, en tenant compte des spécialités de chaque médecin et du calendrier. 
          Les patients doivent s'inscrire à des règles pour voir les médecins.
        </p>
      </div>
    </section>

    <hr className="border-t-2 border-gray-300 my-8" />

    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Outils et logiciels utilisés</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>IDE : Visual Studio 2022</li>
          <li>Language : C#</li>
          <li>Type : Application bureau</li>
          <li>Frontend : WPF</li>
          <li>Backend : Entity Framework</li>
          <li>Base de Données : MS SQL</li>
          <li>Version Control : Git et GITHUB</li>
        </ul>
      </div>
    </section>
  </div>
</div>

  );
}

export default Project2;
