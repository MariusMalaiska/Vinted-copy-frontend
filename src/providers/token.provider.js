import React, { useState } from "react";

const TokenContext = React.createContext({});

function TokenProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export { TokenProvider, TokenContext };
