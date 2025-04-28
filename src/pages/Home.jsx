import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: "data" });
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to the <b>HOME</b> page!
      </p>
      <button onClick={handleClick}>Go to Data</button>
    </>
  );
};

export default Home;
