import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts";

const AuthProvider = ({ children }) => {
  // const [token, setToken_] = useState(localStorage.getItem("token"));
  // const [user, setUser_] = useState(JSON.parse(localStorage.getItem("user")));
  const [user, setUser_] = useState(JSON.parse(localStorage.getItem("user")));


  // const setToken = (newToken) => {
  //   setToken_(newToken);
  // };

  const setUser = (newUser) => {
    setUser_(newUser);
  }

  useEffect(() => {
    if (user) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.accessToken;
      // localStorage.setItem("token", usertoken);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("user")
    }
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   } else {
  //     localStorage.removeItem("user")
  //   }
  // }, [user])

  const contextValue = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  return <AuthContext.Provider value={contextValue}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;