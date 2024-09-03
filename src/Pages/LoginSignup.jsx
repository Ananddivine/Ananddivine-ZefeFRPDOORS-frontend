import React, { useState, useEffect } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || (state === "Sign Up" && !formData.username)) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const login = async () => {
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('https://zefefrpdoors-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('user-email', formData.email);
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => window.location.replace("/"), 2000);
      } else {
        setError(responseData.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('https://zefefrpdoors-backend.onrender.com/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('user-email', formData.email);
        setSuccess('Signup successful! Redirecting...');
        setTimeout(() => window.location.replace("/"), 2000);
      } else {
        setError(responseData.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Id" required />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" required />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>
          {loading ? 'Processing...' : 'Continue'}
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already Have An Account? <span onClick={() => { setState("Login") }}>Login Here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create An Account? <span onClick={() => { setState("Sign Up") }}>Click Here</span>
          </p>
        )}
       
      </div>

      {loading && (
        <div id="loading-spinner" className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {error && (
        <div id="error-message" className={`message error-message animate ${error ? 'visible' : 'hidden'}`}>
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div id="success-message" className={`message success-message animate ${success ? 'visible' : 'hidden'}`}>
          <p>{success}</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
