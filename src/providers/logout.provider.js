import React, { useState, useCallback, useContext } from "react";
import { TokenContext } from "../providers/token.provider";
import { useHistory } from "react-router";
import { API_URL } from "./constants";

const LogoutContext = React.createContext({});

function LogoutProvider({ children }) {
  const history = useHistory();
  const { token, setToken } = useContext(TokenContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = useCallback(async () => {
    setIsLoading(true);
    // isAuthenticated(true);

    try {
      const response = await fetch(`${API_URL}/user/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-node": token
        }
      });
      //   const json = await response.json();
      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("appName-user");
        setToken(null);
        history.replace("/Vinted-copy-frontend/");
      } else {
        // console.log("response not ok");
        console.log("response not ok, logout", token);
        setError(response);
      }
    } catch (e) {
      console.log(await e);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setError, token, setToken, history]);

  return (
    <LogoutContext.Provider value={{ logout, error, isLoading }}>
      {children}
    </LogoutContext.Provider>
  );
}

export { LogoutProvider, LogoutContext };
