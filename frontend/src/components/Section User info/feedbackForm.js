import React, { useState } from 'react';
import './feedbackForm.css'; // Ensure your CSS is correctly imported

const backendSite = process.env.REACT_APP_BACKEND_SITE;

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    usability: '',
    design: '',
    performance: '',
    suggestions: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        console.log(backendSite); 
        const response = await fetch(`${backendSite}/submit-feedback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message);
          setFormData({
            usability: '',
            design: '',
            performance: '',
            suggestions: ''
          });
        } else {
          alert('Failed to submit feedback.');
        }
      } catch (error) {
        alert('Error submitting feedback. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Validation function
  const handleValidation = () => {
    const { usability, design, performance, suggestions } = formData;
    return usability !== '' && design !== '' && performance !== '' && suggestions !== '';
  };

  return (
    <div className="feedback-form-container">
      <h1 className='feedback-form-container-text'>Liked this website? </h1> 
      <form onSubmit={handleSubmit} className="feedback-form">
        <h1 className='feedback-title'>FeedbackForm</h1>
        <div className="feedback-form-row">
          <label className="feedback-form-label">
            Usability:
            <input
              type="number"
              name="usability"
              value={formData.usability}
              onChange={handleChange}
              className="feedback-form-input-rating"
              min="1"
              max="5"
              required
            />
          </label>
          <label className="feedback-form-label">
            Design:
            <input
              type="number"
              name="design"
              value={formData.design}
              onChange={handleChange}
              className="feedback-form-input-rating"
              min="1"
              max="5"
              required
            />
          </label>
          <label className="feedback-form-label">
            Performance:
            <input
              type="number"
              name="performance"
              value={formData.performance}
              onChange={handleChange}
              className="feedback-form-input-rating"
              min="1"
              max="5"
              required
            />
          </label>
        </div>
        <label className="feedback-form-label">
          Suggestions:
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            className="feedback-form-input"
            rows="3"
            required
          />
        </label>
        <button type="submit" className="feedback-form-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
