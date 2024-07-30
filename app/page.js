import Image from "next/image";
import "./Home.css"

export default function Home() {
  return (
    <main max-w-6xl mx-auto p-8 bg-blue-500 min-h-screen>
     <div className="home">
      <div className="imageStyle"><img src="/avatar.png" alt="avatar du profil" /></div>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
      Bonjour, je suis Bilal Elarchi, originaire du Maroc.<br />
      J'ai obtenu mon master en gestion de projet, puis j'ai fait des études pour devenir technicien spécialisé en diagnostic automobile.<br />
      J'ai toujours aimé la technologie et les PC, c'est pourquoi j'ai commencé un programme de programmation informatique. Je suis encore au début, mais j'ai appris les bases de la programmation et les concepts du développement orienté objet.<br />
      Les langages et compétences que j'ai pu développer sont HTML, CSS, JavaScript, Node.js, React, C#, Java, Kotlin, et Swift.<br />
      Mon domaine de prédilection et celui dans lequel je souhaite me spécialiser est la programmation web.<br />
      En dehors des études, j'aime suivre l'actualité politique et économique, et apprendre de nouvelles langues.
    </p>
    
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg p-8 mb-12">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-500 pb-2">
    Outils et Logiciels Professionnels
  </h2>
  <ul className="list-none pl-0 space-y-3 text-gray-800">
    <li className="relative pl-6 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-blue-600 before:text-2xl before:content-['●'] flex items-center space-x-2">
      <span><strong>Langages de Programmation:</strong> C#, Java, JavaScript, Kotlin</span>
    </li>
    <li className="relative pl-6 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-blue-600 before:text-2xl before:content-['●'] flex items-center space-x-2">
      <span><strong>Frameworks:</strong> React, Express, Entity, Spring Boot</span>
    </li>
    <li className="relative pl-6 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-blue-600 before:text-2xl before:content-['●'] flex items-center space-x-2">
      <span><strong>Outils:</strong> Git, Docker, VMware</span>
    </li>
    <li className="relative pl-6 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-blue-600 before:text-2xl before:content-['●'] flex items-center space-x-2">
      <span><strong>Bases de Données:</strong> MySQL, PostgreSQL, MS SQL, MongoDB</span>
    </li>
    <li className="relative pl-6 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:text-blue-600 before:text-2xl before:content-['●'] flex items-center space-x-2">
      <span><strong>Autres:</strong> Agile, Scrum, DevOps</span>
    </li>
  </ul>
</section>





<section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg p-8 mb-12">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-500 pb-2">
    Points Forts
  </h2>
  <ul className="list-inside pl-4 space-y-3 text-gray-800">
    <li className="flex items-center space-x-2">
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10l-4-4 1.4-1.4L6 7.2 16.6-2 18 0l-12 12L6 10z" />
      </svg>
      <span>Résolution de Problèmes</span>
    </li>
    <li className="flex items-center space-x-2">
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10l-4-4 1.4-1.4L6 7.2 16.6-2 18 0l-12 12L6 10z" />
      </svg>
      <span>Travail en Équipe</span>
    </li>
    <li className="flex items-center space-x-2">
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10l-4-4 1.4-1.4L6 7.2 16.6-2 18 0l-12 12L6 10z" />
      </svg>
      <span>Communication</span>
    </li>
    <li className="flex items-center space-x-2">
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10l-4-4 1.4-1.4L6 7.2 16.6-2 18 0l-12 12L6 10z" />
      </svg>
      <span>Apprentissage Continu</span>
    </li>
  </ul>
</section>









<section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg p-8 mb-12">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-500 pb-2">Expérience Professionnelle</h2>
  <div className="space-y-8">


  <div className="space-y-6">
  <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Superviseur - Groupe Zara</h3>
    <p className="text-gray-700 mb-4">Octobre 2021 - Décembre 2022</p>
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      <li>Supervision et gestion des employés</li>
      <li>Contrôle de la sécurité et de la santé au travail</li>
      <li>Contrôle de la qualité des matières premières</li>
      <li>Formation et entraînement du personnel</li>
      <li>Gestion des stocks et des inventaires</li>
    </ul>
  </div>

  <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Responsable de diagnostic auto. - Lamin Cars S.A.R.L</h3>
    <p className="text-gray-700 mb-4">Juin 2019 - Octobre 2019</p>
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      <li>Établissement d'un diagnostic précis et exhaustif</li>
      <li>Contrôle qualité des travaux et vérification des résultats</li>
      <li>Stockage des pièces détachées utilisées et des rapports de travail</li>
      <li>Explications détaillées des travaux et des coûts associés</li>
      <li>Analyse des comportements anormaux du système mécanique pour identifier les problèmes</li>
    </ul>
  </div>

  <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Responsable au service d'importation. - Reacting S.A.R.L</h3>
    <p className="text-gray-700 mb-4">Janvier 2016 - Octobre 2016</p>
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      <li>Gestion des documents d'importation (douane, formalités, etc.)</li>
      <li>Négociation des contrats et des tarifs</li>
      <li>Suivi des livraisons et des réclamations</li>
      <li>Suivi des livraisons et des réclamations</li>
      <li>Gestion des stocks de produits en transit et en stockage</li>
    </ul>
  </div>

  <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Responsable au service Marketing. - KiraAqua S.A.R.L</h3>
    <p className="text-gray-700 mb-4">Janvier 2015 - Décembre 2015</p>
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      <li>Élaboration de la stratégie marketing de l'entreprise</li>
      <li>Établissement de rapports pour les gestionnaires et les décideurs</li>
      <li>Analyse du marché et des tendances concurrentielles</li>
      <li>Création de contenu pour les campagnes marketing</li>
      <li>Identification des opportunités de croissance et de développement</li>
    </ul>
  </div>

  <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Agent de Transit - Cargo Casa S.A.R.L</h3>
    <p className="text-gray-700 mb-4">Juin 2013 - Décembre 2013</p>
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      <li>Établir des rapports sur l'état des expéditions et des livraisons</li>
      <li>Vérifier l'exactitude des documents de transport et des déclarations de douane</li>
      <li>Résoudre les problèmes liés aux formalités douanières</li>
      <li>Gérer les délais de stockage et de détention des marchandises à la douane</li>
      <li>Suivre les marchandises pendant le stockage ou la détention à la douane</li>
    </ul>
  </div>
</div>



  </div>
</section>













<section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg p-8 mb-12">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-500 pb-2">
    Éducations
  </h2>
  <ul className="space-y-4 text-teal-800">
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-3 h-3 bg-teal-600 rounded-full mt-1"></div>
      <div>
        <span className="font-semibold">Actuellement:</span> Programmation informatique - (Collège La Cité)
      </div>
    </li>
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-3 h-3 bg-teal-600 rounded-full mt-1"></div>
      <div>
        <span className="font-semibold">2019:</span> Technicien spécialisé en Diagnostic automobile - (OFPTT Casablanca)
      </div>
    </li>
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-3 h-3 bg-teal-600 rounded-full mt-1"></div>
      <div>
        <span className="font-semibold">2013:</span> Master en Commerce et gestion de projet - (HEM Business School)
      </div>
    </li>
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-3 h-3 bg-teal-600 rounded-full mt-1"></div>
      <div>
        <span className="font-semibold">2009:</span> Baccalauréat Science - (Alfachtali School)
      </div>
    </li>
  </ul>
</section>





<section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg p-8 mb-12">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-500 pb-2">
    Projets Récents
  </h2>
  <div className="space-y-6">
    <div className="bg-green-200 p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-blue-500 decoration-2">
        Projet Application CAN
      </h3>
      <p className="text-gray-700 italic">
        Développement d'une application sous forme de quiz sur la CAN 2022 pour Android avec Android studio et Kotlin.
      </p>
    </div>

    <div className="bg-green-200 p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-blue-500 decoration-2">
        Projet Calculatrice
      </h3>
      <p className="text-gray-700 italic">
        Création d'une calculatrice similaire a celle d'IOS avec C# et wpf pour le bureau.
      </p>
    </div>

    <div className="bg-green-200 p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-blue-500 decoration-2">
        Projet Voiture
      </h3>
      <p className="text-gray-700 italic">
        Création d'une application qui affiche les voitures a vendre d'un consessionnaire avec les details de l'auto.
      </p>
    </div>

    <div className="bg-green-200 p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 underline decoration-blue-500 decoration-2">
        Projet page d'un restaurant
      </h3>
      <p className="text-gray-700 italic">
        Création d'une page web pour le restaurant de La Cite.
      </p>
    </div>
  </div>
</section>





      


      

    </div>
    </main>
  );
}
