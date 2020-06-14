import React from 'react';

var PlayingContext = React.createContext();

function PlayingProvider({ children }) {
  var [trackId, setTrackId] = React.useState(0);
  var [ratio, setRatio] = React.useState(0);
  var [paused, setPaused] = React.useState(true);
  var [isNext, setNext] = React.useState(false);
  var [isPrev, setPrev] = React.useState(false);

  const handleTrackId = (value) => {
    setTrackId(value);
  };

  const handleRatio = (value) => {
    setRatio(value);
  };

  const handlePaused = (value) => {
    setPaused(value);
  };

  const handleNext = (value) => {
    setNext(value);
  };

  const handlePrev = (value) => {
    setPrev(value);
  };

  return (
    <PlayingContext.Provider
      value={{
        trackId,
        handleTrackId,
        ratio,
        handleRatio,
        paused,
        handlePaused,
        isNext,
        handleNext,
        isPrev,
        handlePrev,
      }}>
      {children}
    </PlayingContext.Provider>
  );
}

function usePlayingState() {
  var context = React.useContext(PlayingContext);
  if (context === undefined) {
    throw new Error('usePlayingState must be used within a PlayingProvider');
  }
  return context;
}

export { PlayingProvider, usePlayingState };
