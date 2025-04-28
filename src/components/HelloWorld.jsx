import "./HelloWorld.css";

const HeaderHelloWorld = ({ title = "Ups, no value input" }) => {
  return <h1 className="title">{title.toUpperCase()}</h1>;
};

const ParagraphHelloWorld = () => {
  const text = "Learning React with Vite";
  return <p className="content">{text.toLowerCase()}</p>;
};

const HelloWorld = () => {
  const props = {
    title: "Hello World",
    text: "Hello World from spreads",
  };

  return (
    <main>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </main>
  );
};

export default HelloWorld;
