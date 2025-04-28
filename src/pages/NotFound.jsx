import { useParams } from "react-router";

const NotFound = () => {
  const params = useParams();
  return (
    <>
      <h1>Not Found</h1>
      <p>
        Page <i>{params["*"]}</i> <b>Not Found</b>
      </p>
    </>
  );
};

export default NotFound;
