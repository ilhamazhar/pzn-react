const GuestBookForm = ({ name, setName, ref }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={ref}
      />
    </>
  );
};

export default GuestBookForm;
