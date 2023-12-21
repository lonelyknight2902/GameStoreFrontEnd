import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { useAuth } from "../hooks";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      setLoading(true);
      setErr(false);
      e.preventDefault();
      const endpoint = "http://localhost:3000/api/v1/user/login";
      const res = await axios.post(endpoint, {
        username: username,
        password: password,
      });
      if (res.data) {
        setErr(false);
        setLoading(false);
        setUser(res.data.data);
        navigate("/", { replace: true });
      }
    } catch (error) {
      setErr(true);
    }
  };

  const handleSignUp = async (e) => {
    try {
      setLoading(true);
      setErr(false);
      e.preventDefault();

      const endpoint = "http://localhost:3000/api/v1/user/signup";
      const res = await axios.post(endpoint, {
        username: username,
        password: password,
        imageUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
      });
      if (res.data) {
        setErr(false);
        setLoading(false);
        // setUser(res.data.data);
        setSuccess(true);
      }
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="mx-auto w-3/6 h-fit bg-neutral-800 rounded-lg text-white items-center py-8 mt-56 max-w-2xl">
      <form className="flex flex-col items-center w-full gap-5">
        <span className="text-lg font-semibold">Sign In or Sign Up</span>
        {err && <div className="text-white">Error has occured</div>}
        {success && <div className="text-white">Account has been created</div>}
        <div className="border border-neutral-600 w-3/4 px-4 py-2 focus-within:border-neutral-400 rounded-lg">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            className="bg-transparent outline-none w-full"
            autoFocus
          />
        </div>
        <div className="border border-neutral-600 w-3/4 px-4 py-2 focus-within:border-neutral-400 rounded-lg">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="bg-transparent outline-none w-full"
            autoFocus
          />
        </div>
        <div className="w-3/4 flex gap-4 justify-center">
          <Button text="Sign In" isSecondary={false} onClick={handleLogin} />
          <Button text="Sign Up" isSecondary={true} onClick={handleSignUp}/>
        </div>
      </form>
    </div>
  );
};

export default Login;
