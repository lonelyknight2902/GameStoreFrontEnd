import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";

const Logout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser();
    navigate("/", { replace: true });
  };

  // setTimeout(() => {
  //   handleLogout();
  // }, 3 * 1000);

  return <>Logout Page</>;
};

export default Logout;
