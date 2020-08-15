import React, { useState, useCallback } from "react";
import { useHistory } from "react-router";
import { API_URL } from "./constants";

const RegisterContext = React.createContext({});

function RegisterProvider({ children }) {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = useCallback(
    async (nickName, password, email, phonenumber) => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_URL}/v1/user/register`, {
          method: "POST",
          body: JSON.stringify({
            nickName,
            password,
            email,
            phonenumber
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response.ok) {
          console.log(response);
          history.replace("/");
        } else {
          setError(response);
        }
      } catch (e) {
        console.log(await e);
      } finally {
        setIsLoading(false);
      }
    },
    [setError, history]
  );

  return (
    <RegisterContext.Provider value={{ register, error, isLoading }}>
      {children}
    </RegisterContext.Provider>
  );
}

export { RegisterProvider, RegisterContext };
