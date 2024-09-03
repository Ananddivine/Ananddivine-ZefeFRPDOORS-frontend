import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbycuNKHOr0CTde47PXKAfQayP_J2b8pawP9GGaJrzVBPf5HUU6NYlulQUwvm4Pc3w7W-g/exec';

  const validateForm = () => {
    const mobilePattern = /^\d{10}$/;

    if (!name || !mobile) {
      setError('All fields are required.');
      return false;
    }

    if (!mobilePattern.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('mobile', mobile);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => response.json())
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose(); // Close the popup after success
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        setError('Failed to send data. Please try again.');
      });
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Welcome to ZefeDoors</h2>
        <p>Get exclusive offers, discounts, and the latest updates.</p>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Your details have been submitted successfully!</p>}
        {!success && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
        <button className="close-button" onClick={onClose}>
          Close &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
