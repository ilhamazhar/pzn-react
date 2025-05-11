import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
