const Toolbar = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
      <button onClick={onClick}>Third</button>
    </div>
  );
};

export default Toolbar;
