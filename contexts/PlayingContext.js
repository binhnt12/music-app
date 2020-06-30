import React, { useState, useContext, createContext } from 'react';

const PlayingContext = createContext();

function PlayingProvider({ children }) {
  const [trackId, setTrackId] = useState(null);
  const [trackIdPlaying, setTrackIdPlaying] = useState(trackId);
  const [ratio, setRatio] = useState(0);
  const [paused, setPaused] = useState(true);
  const [isNext, setNext] = useState(false);
  const [isPrev, setPrev] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeat, setRepeat] = useState('repeatOff');
  const [change, setChange] = useState(true);

  const handleTrackIdPlaying = (value) => {
    setTrackIdPlaying(value);
  };

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

  const handleShuffleOn = (value) => {
    setShuffleOn(value);
  };

  const handleRepeat = (value) => {
    setRepeat(value);
  };

  const handleChange = (value) => {
    setChange(value);
  };

  return (
    <PlayingContext.Provider
      value={{
        trackId,
        handleTrackId,
        trackIdPlaying,
        handleTrackIdPlaying,
        ratio,
        handleRatio,
        paused,
        handlePaused,
        isNext,
        handleNext,
        isPrev,
        handlePrev,
        shuffleOn,
        handleShuffleOn,
        repeat,
        handleRepeat,
        change,
        handleChange,
      }}>
      {children}
    </PlayingContext.Provider>
  );
}

function usePlayingState() {
  var context = useContext(PlayingContext);
  if (context === undefined) {
    throw new Error('usePlayingState must be used within a PlayingProvider');
  }
  return context;
}

export { PlayingProvider, usePlayingState };
