import React from 'react';

var ModalContext = React.createContext();

function ModalProvider({ children }) {
  var [isShowModal, setShowModal] = React.useState(false);

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
  var context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
}

export { ModalProvider, useModalState };
