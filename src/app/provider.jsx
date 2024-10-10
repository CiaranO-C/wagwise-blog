import { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [animate, setAnimate] = useState(true);

  return (
    <ModalContext.Provider value={{ modal, setModal, animate, setAnimate }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
