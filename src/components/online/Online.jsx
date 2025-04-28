import { useOnline } from "./OnlineHook.jsx";

const Online = () => {
  const isOnline = useOnline();

  return <h1>{isOnline ? "Online" : "Offline"}</h1>;
};

export default Online;
