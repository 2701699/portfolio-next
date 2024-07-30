"use client"; // Ensure this is a Client Component

import React, { useState } from 'react';
import './AddTestimonial.css';

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
    <div className="testimonials-page">
      <h1>Témoignages</h1>
      
      {/* Form to add a testimonial */}
      <div className="add-testimonial">
        <h2>Ajouter votre Témoignage</h2>
        {submitted && <div className="success-message">Témoignage ajouté avec succès !</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
      
      {/* Display testimonials */}
      <div className="testimonials-list">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))
        ) : (
          <p>Il n'y a aucun témoignage pour le moment, <br /> Ajoutez un témoignage pour en voir ici.</p>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
