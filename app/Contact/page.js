"use client";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setSubmitted(false); 
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Ce champ est requis.';
    tempErrors.email = formData.email ? '' : 'Ce champ est requis.';
    tempErrors.message = formData.message ? '' : 'Ce champ est requis.';
    if (formData.email) {
      tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email invalide.';
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      
      console.log('Formulaire soumis avec succès', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 rounded-lg shadow-lg m-2">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">Contactez-moi</h1>
      {submitted && <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">Message envoyé avec succès !</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-lg font-semibold text-gray-700">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg font-semibold text-gray-700">Votre Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-lg font-semibold text-gray-700">Votre Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
