export const Container = ({ children }) => {
  return (
    <div>
      <h1>PZN</h1>
      {children}
      <footer>
        <p>@ 2025 PZN</p>
      </footer>
    </div>
  );
};

export default Container;
