import { useState } from 'react';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import api from '../utils/axios';

const INITIAL_FORM_STATE = {
  name: '',
};

function Checklist() {
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await api.post('/api/checklists', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(response.data.message);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // const fetchChecklists = async () => {
  //   try {
  //     const response = await a
  //   } catch (error) {

  //   }
  // }
  return (
    <>
      <h1>
        <NavLink to="/">Checklist</NavLink>
      </h1>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="checklist-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          <br />
          <br />
          <button
            type="submit"
            className={`submit-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Checklist'}
          </button>
        </div>
      </form>
    </>
  );
}

export default Checklist;
