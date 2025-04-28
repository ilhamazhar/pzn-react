const Product = ({ product }) => {
  return (
    <>
      <h2>
        {product.id}: {product.name} - <small>Rp.{product.price}</small>
      </h2>
    </>
  );
};

export default Product;
