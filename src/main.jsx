import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/data/Product.jsx";
import Customer from "./pages/data/Customer.jsx";
import Seller from "./pages/data/Seller.jsx";
import Data from "./pages/data/Data.jsx";
import Layout from "./components/Layout.jsx";
import ProductDetail from "./pages/data/ProductDetail.jsx";
import Image from "./pages/data/Image.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductSearch from "./pages/data/ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="data" element={<Layout />}>
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="products/search" element={<ProductSearch />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Seller />} />
          <Route path="images/*" element={<Image />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
