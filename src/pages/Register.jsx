import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { VITE_BASE_URL } from '../constant';

const INITIAL_FORM_STATE = {
  name: '',
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await axios.post(`${VITE_BASE_URL}/api/public/register`, formData);
      navigate('/login');
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>
        <NavLink to="/">Register</NavLink>
      </h1>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
        <br />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled={loading}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
        />
        <br />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Submit'}
        </button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login here</NavLink>
      </p>
    </>
  );
};

export default Register;
