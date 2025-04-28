import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const Profile = () => {
  const profile = useContext(ProfileContext);
  return (
    <>
      <h2>Profile</h2>
      <p>Data {profile}</p>
    </>
  );
};

export default Profile;
