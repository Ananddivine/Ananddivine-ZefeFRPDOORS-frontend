import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/Progress.css';

const Progress = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('user-email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const authToken = localStorage.getItem('auth-token');
      if (!authToken) {
        navigate('/loginsignup');
        return;
      }
      const response = await fetch('http://localhost:4000/user-details', {
        headers: { 'auth-token': authToken }
      });
      const userData = await response.json();
      setName(userData.name);
      // Do not set email from userData if already set from localStorage
    };

    fetchUserDetails();

    // Retrieve products from state or local storage
    if (location.state && location.state.products) {
      setProducts(location.state.products);
    } else {
      const storedProducts = JSON.parse(localStorage.getItem('checkout-products'));
      if (storedProducts) {
        setProducts(storedProducts);
      }
    }
  }, [location.state, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Ensure products array contains all necessary details
    const formattedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      new_price: product.new_price,
      description: product.description,
      quantity: product.quantity
    }));

    const response = await fetch('https://script.google.com/macros/s/AKfycbyfSuMEo1p4Fsfr9Q-Xe8Kd3lJ4mX6t-ujgl9XDS8i_YG5P_uqQDPwpd1GVJd-d9GQV4Q/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        email,
        name,
        products: JSON.stringify(formattedProducts),
        authToken: localStorage.getItem('auth-token')
      })
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      alert('OTP sent to your email. Please enter it to confirm.');
      setShowOtpInput(true);
    } else {
      alert(data.message);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('https://script.google.com/macros/s/AKfycbyfSuMEo1p4Fsfr9Q-Xe8Kd3lJ4mX6t-ujgl9XDS8i_YG5P_uqQDPwpd1GVJd-d9GQV4Q/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        email,
        otp,
        authToken: localStorage.getItem('auth-token')
      })
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      alert('Order confirmed!');
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <style>
        {`
          #loading-spinner {
            display: block;
            position: fixed;
            z-index: 8888;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.678);
          }

          #loading-spinner:before {
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 70px;
            height: 70px;
            margin: -30px 0 0 -30px;
            border-radius: 50%;
            border: 10px solid #ffffff00;
            border-top-color: #008cf0;
            border-bottom-color: #0088f0;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div id="loading-spinner" style={{ display: loading ? 'block' : 'none' }}></div>

      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit" disabled={loading}>Submit</button>
      </form>

      {showOtpInput && (
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button type="submit" disabled={loading}>Verify OTP</button>
        </form>
      )}

      <div>
        <h2>Order Details:</h2>
        {products.map((product, index) => (
          <div key={index}>
            <p>Product: {product.name}</p>
            <p>Price: ${product.new_price}</p>
            <p>Description: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
