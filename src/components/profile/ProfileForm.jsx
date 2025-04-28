const ProfileForm = ({ name, setName }) => {
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h2>Profile Form</h2>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
};

export default ProfileForm;
