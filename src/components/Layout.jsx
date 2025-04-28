import { NavLink, Outlet, useLocation } from "react-router";
import "./../index.css";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <h1>This is header</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/data">Data</NavLink>
          </li>
          <ul>
            <li>
              <NavLink to="/data/sellers">Sellers</NavLink>
            </li>
            <li>
              <NavLink to="/data/customers">Customers</NavLink>
            </li>
            <li>
              <NavLink to="/data/products">Products</NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/data/products",
                  search: "?category=shoes",
                  hash: "#top",
                }}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>This is footer</h1>
        <p>
          Location: {location.pathname}
          {location.search}
          {location.hash}
        </p>
      </footer>
    </>
  );
};

export default Layout;
