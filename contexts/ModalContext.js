import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isShowModal, setShowModal] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(null);

  const handleShowModal = (value) => {
    setShowModal(value);
  };

  const handleShowPlaylist = (value) => {
    setShowPlaylist(value);
  };

  return (
    <ModalContext.Provider
      value={{
        isShowModal,
        handleShowModal,
        showPlaylist,
        handleShowPlaylist,
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
