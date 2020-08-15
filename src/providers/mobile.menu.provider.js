import React, { useState } from "react";

const MobileMenuContext = React.createContext({});

function MobileMenuProvider({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenu, setMobileMenu, toggleMobileMenu, closeMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export { MobileMenuProvider, MobileMenuContext };
