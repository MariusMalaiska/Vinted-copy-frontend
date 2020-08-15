import React, { useState } from "react";

const ModalContext = React.createContext({});

function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider value={{ modal, setModal, closeModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
