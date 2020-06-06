import React from 'react';

var ModalContext = React.createContext();

function ModalProvider({ children }) {
  var [isModalVisible, setModalVisible] = React.useState(false);
  var [trackId, setTrackId] = React.useState(0);

  handleModalVisible = (value) => {
    setModalVisible(value);
  };

  handleTrackId = (value) => {
    setTrackId(value);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        handleModalVisible,
        trackId,
        handleTrackId,
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
