import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const ProductSearch = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    if (search) {
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`,
      });
    }
  };

  return (
    <>
      <h1>Search Product</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>You looking for: {searchParams.get("search")}</p>
    </>
  );
};

export default ProductSearch;
