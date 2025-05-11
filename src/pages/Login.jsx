import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { VITE_BASE_URL } from '../constant';

const INITIAL_FORM_STATE = {
  emailOrUsername: '',
  password: '',
};

const Login = () => {
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
      await axios.post(`${VITE_BASE_URL}/api/public/login`, formData);
      navigate('/dashboard');
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
        <NavLink to="/">Login</NavLink>
      </h1>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="emailOrUsername">Username OR email: </label>
        <input
          type="text"
          name="emailOrUsername"
          value={formData.emailOrUsername}
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
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Register here</NavLink>
      </p>
    </>
  );
};

export default Login;
