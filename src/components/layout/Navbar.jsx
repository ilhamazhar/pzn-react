import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/checklist">Checklist</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
