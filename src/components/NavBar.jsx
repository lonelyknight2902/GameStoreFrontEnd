import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import SearchBar from "./SearchBar";
import { useAuth } from "../hooks";

const NavBar = () => {
  const { user } = useAuth();

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // setToken();
    setUser();
    navigate("/", { replace: true });
  };

  return (
    <nav className="sticky top-0 w-screen bg-neutral-900 z-50 font-inter">
      <div className="flex justify-between items-center w-full px-16 py-4 text-white font-normal text-xl">
        <Link to="/">Game On!</Link>
        <SearchBar />
        <div className="flex gap-7 items-center">
          {user && <Link to="/cart">Cart</Link>}
          {user && <Link to="/library">Library</Link>}
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <div className="flex gap-2 items-center">
              <img
                className=" w-10 h-10 object-cover rounded-full"
                src={user.IMAGEURL}
                alt=""
              />
              {user.USERNAME}
            </div>
          )}
          {user ? (
            <div onClick={handleLogout} className=" cursor-pointer">
              <MdLogout />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
