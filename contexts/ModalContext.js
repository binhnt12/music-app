import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = (value) => {
    setShowModal(value);
  };

  return (
    <ModalContext.Provider
      value={{
        isShowModal,
        handleShowModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalState() {
  var context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
}

export { ModalProvider, useModalState };
