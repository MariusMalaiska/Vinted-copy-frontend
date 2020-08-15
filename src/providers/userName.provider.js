import React, { useState } from "react";

const UserNameContext = React.createContext({});

function UserNameProvider({ children }) {
  const [userName, setUserName] = useState("");

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
}

export { UserNameProvider, UserNameContext };
