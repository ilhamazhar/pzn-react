import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const handleOnClick = () => {
    console.log("Button clicked");

    setLoad(true);
  };

  useEffect(() => {
    console.log("Calling useEffect with []");
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("products.json");
      const data = await response.json();
      setProducts(data);
    }

    console.log("LOAD PRODUCTS");
    if (load) {
      fetchProducts();
    }
  }, [load]);

  // useEffect(() => {
  //   if (load) {
  //     console.log("useEffect called");
  //     fetch("products.json")
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data))
  //       .catch((error) => console.error("Error fetching products:", error));
  //   }
  // }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleOnClick}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
