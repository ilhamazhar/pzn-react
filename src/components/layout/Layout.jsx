import { NavLink, Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 Your Company</p>
        <p>All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </footer>
    </>
  );
};

export default Layout;
