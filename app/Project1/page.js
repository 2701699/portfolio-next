import React from 'react';
//import './Project1.css';

function Project1() {
  return (

    <div className="bg-gray-100 py-8 px-4">
  <div className="container mx-auto">
  <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
  Projets de conception d'un Back-End de gestion d'Hotel
</h1>
    <div className="project-content mb-8">
      <p className="text-gray-700 mb-4 text-center">
        Lien Vers le Repository sur : 
        <a href="https://github.com/2701699/Exam_2_ServerWeb/tree/master" className="text-yellow-500 hover:text-green-700 ml-1">GITHUB</a>
      </p>
      <div className="flex justify-center">
      <img src='hotel.png' alt="projet hotel" className="w-64 h-auto rounded-lg shadow-md"/>
      </div>
    </div>
  

  

     
        
      <section className="bg-gray-100 py-8 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Description</h2>
    <p className="text-gray-700 leading-relaxed">
      Cette application web est conçue avec une API qui permet la gestion de la base de données de toutes les ressources de l'hôtel,
      dont les employés, le personnel, les réservations, le stock...<br/>
      Le front-end est fait avec Vue, et il y a beaucoup de middleware utilisé comme l'ORM Sequelize avec Express pour le serveur,
      pour l'authentification comme JWT, et pour la validité des données express-validator...
    </p>
  </div>
</section>

<hr className="border-t-2 border-gray-300 my-8" />

<section className="bg-gray-100 py-8 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Technologies Utilisées</h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
      <li>IDE : Visual Studio Code</li>
      <li>Language : JAVASCRIPT</li>
      <li>Runtime Environnement : Node JS</li>
      <li>Type : Application web - API</li>
      <li>Frontend : Vue JS</li>
      <li>Backend : Express JS</li>
      <li>Base de Données : MYSQL, avec ORM SEQUELIZE JS</li>
      <li>Version Control : Git et GITHUB</li>
    </ul>
  </div>
</section>

      </div>
    </div>
  );
}

export default Project1;
