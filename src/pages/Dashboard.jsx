import axios from 'axios';
import { useState, useEffect } from 'react';
import { VITE_BASE_URL } from '../constant';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${VITE_BASE_URL}/api/users/me`);
        setUser(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setError(errorMessage);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <h2>Welcome, {user}</h2>
      {error && <p>Error: {error}</p>}
    </>
  );
}

export default Dashboard;
