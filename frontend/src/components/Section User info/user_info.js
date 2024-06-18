import React, { useState } from 'react';
import './user_info.css';
import FeedbackForm from './feedbackForm';

const backendSite = process.env.REACT_APP_BACKEND_SITE;

const UserInfo = () => {
  
  // Form for Customer Info
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.gender) {
      try {
        const response = await fetch(`${backendSite}/submit-user-info`, {
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
            fullName: '',
            email: '',
            gender: '',
            phoneNumber: ''
          });
        } else {
          alert('Failed to submit user information.');
        }
      } catch (error) {
        alert('Error submitting user information. Please try again.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div id="userInfo" className="section user-info" >
      <h1 id="user-info-content-1">Tell us about you!</h1>

      <div className="customer-info">
        <h1 className='customer-info-text'>Join Us Now!</h1>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">
            <i className="fa fa-user"></i> Full Name:
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>

          <label className="form-label">
            <i className="fa fa-envelope"></i> Email Address:
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>

          <label className="form-label">
            <i className="fa fa-venus-mars"></i> Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="form-label">
            <i className="fa fa-phone"></i> Phone Number (Optional):
            <input
              type="text"
              name="phoneNumber"
              placeholder="(123) 456-7890"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>

      <FeedbackForm />
    </div>
  );
};

export default UserInfo;
