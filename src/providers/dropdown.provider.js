import React, { useState } from "react";

const DropdownContext = React.createContext({});

function DropdownProvider({ children }) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    if (dropdown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <DropdownContext.Provider value={{ dropdown, setDropdown, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
}

export { DropdownProvider, DropdownContext };
