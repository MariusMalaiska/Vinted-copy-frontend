import React, { useState, useCallback, useContext } from "react";
import { TokenContext } from "../providers/token.provider";
import { UserNameContext } from "../providers/userName.provider";
import { useHistory } from "react-router";
import { API_URL } from "./constants";
const LoginContext = React.createContext({});

function LoginProvider({ children }) {
  const history = useHistory();
  const { setToken } = useContext(TokenContext);
  const { setUserName } = useContext(UserNameContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(
    async (email, password) => {
      setIsLoading(true);
      // isAuthenticated(true);
      try {
        const response = await fetch(`${API_URL}/user/login`, {
          method: "POST",
          body: JSON.stringify({
            email,
            password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const json = await response.json();
        if (response.ok) {
          setToken(response.headers.get("x-auth-node"));
          // console.log(response.headers.get("x-auth-node"));
          localStorage.setItem("token", response.headers.get("x-auth-node"));
          localStorage.setItem("appName-user", json.nickName);
          setUserName(json.nickName);
          // console.log(json.nickName);
          history.replace("/Vinted-copy-frontend/");
        } else {
          setError(response);
        }
      } catch (e) {
        console.log(await e);
      } finally {
        setIsLoading(false);
      }
    },
    [setToken, setError, history, setUserName]
  );

  return (
    <LoginContext.Provider value={{ login, error, isLoading }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, LoginContext };
