import { useParams } from "react-router";

const ProductDetail = () => {
  const { productId } = useParams();
  return (
    <>
      <h1>Product Detail {productId}</h1>
      <p>Product detail page</p>
    </>
  );
};

export default ProductDetail;
