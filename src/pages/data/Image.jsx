import { useParams } from "react-router";

const Image = () => {
  const params = useParams();

  return (
    <>
      <h1>Image</h1>
      <p>Image Page: {params["*"]}</p>
    </>
  );
};

export default Image;
