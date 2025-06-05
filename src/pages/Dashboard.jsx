import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import api from '../utils/axios';
import { logout } from '../redux/auth-actions';
import { setError, setLoading, setUser } from '../redux/user-slice';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data: user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchUser() {
      if (!token) {
        navigate('/login', { replace: true });
        return;
      }

      if (!user) {
        dispatch(setLoading());
        try {
          const response = await api.get('/api/users/me');
          dispatch(setUser(response.data.data));
        } catch (err) {
          const errorMessage = err.response?.data?.message || err.message;
          dispatch(setError(errorMessage));
          if (err.response?.status === 401) {
            navigate('/login', { replace: true });
          }
        }
      }
    }
    fetchUser();
  }, [token, navigate, dispatch, user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <h2>Email: {user.email}</h2>
        </>
      ) : null}

      {error && <div className="error-message">{error}</div>}

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
