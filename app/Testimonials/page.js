"use client"; // Ensure this is a Client Component

import React, { useState } from 'react';

function Testimonials() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [testimonials, setTestimonials] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setSubmitted(false); // Reset submitted state on change
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Ce champ est requis.';
    tempErrors.message = formData.message ? '' : 'Ce champ est requis.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setTestimonials((prevTestimonials) => [
        ...prevTestimonials,
        { name: formData.name, message: formData.message }
      ]);
      setSubmitted(true);
      setFormData({
        name: '',
        message: ''
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-blue-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Témoignages</h1>

      {/* Form to add a testimonial */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ajouter votre Témoignage</h2>
        {submitted && <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">Témoignage ajouté avec succès !</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Ajouter
          </button>
        </form>
      </div>

      {/* Display testimonials */}
      <div>
        {testimonials.length > 0 ? (
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                <p className="text-gray-700">{testimonial.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 text-center">Il n'y a aucun témoignage pour le moment, <br /> Ajoutez un témoignage.</p>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
