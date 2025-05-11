import { NavLink } from 'react-router';

function Home() {
  return (
    <>
      <h1>Main App</h1>
      <button>
        <NavLink to="/register">REGISTER HERE</NavLink>
      </button>
      <button>
        <NavLink to="/login">LOGIN HERE</NavLink>
      </button>
    </>
  );
}

export default Home;
