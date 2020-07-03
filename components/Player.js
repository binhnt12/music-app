import React, { useEffect, useState, useMemo, useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import Header from '../components/Header';
import Picture from './Picture';
import SeekBar from '../components/SeekBar';
import Control from '../components/Control';

import { usePlayingState } from '../contexts/PlayingContext';

const { width, height } = Dimensions.get('window');

const Player = ({ tracks, playing }) => {
  const {
    trackId,
    handleTrackId,
    trackIdPlaying,
    handleTrackIdPlaying,
    paused,
    handlePaused,
    isNext,
    handleNext,
    isPrev,
    handlePrev,
    handleRatio,
    shuffleOn,
    handleShuffleOn,
    repeat,
    handleRepeat,
    change,
    handleChange,
    isForwardDisabled,
    handleForwardDisabled,
  } = usePlayingState();

  const [state, setState] = useState({
    totalLength: 1,
    currentPosition: 0,
    dragTime: null,
    reRender: '1',
    isPortrait: width < height,
  });

  const isFirstRun = useRef(true);

  // console.log({ trackId, trackIdPlaying });

  useEffect(() => {
    if (playing && change) {
      handleTrackIdPlaying(_.findIndex(playing, (o) => o.id === trackId));
    }
    if (trackIdPlaying === null || !shuffleOn) {
      handleTrackIdPlaying(trackId);
    }
    handleChange(true);
  }, [trackId, playing]);

  useEffect(() => {
    if (trackIdPlaying !== null) {
      handleTrackId(playing[trackIdPlaying].id);
    }
  }, [trackIdPlaying]);

  useEffect(() => {
    if (isNext) {
      handleOnForward();
    }
    handleNext(false);
  }, [isNext]);

  useEffect(() => {
    if (isPrev) {
      handleOnBack();
    }
    handlePrev(false);
  }, [isPrev]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (state.currentPosition >= state.totalLength - 1) {
      if (repeat === 'repeatOnce') {
        setState((state) => ({
          ...state,
          reRender: state.reRender === '1' ? '0' : '1',
        }));
      } else {
        handleOnForward();
      }
    }
    handleRatio(state.currentPosition / state.totalLength);
  }, [state.currentPosition]);

  useEffect(() => {
    if (trackIdPlaying === playing.length - 1 && repeat === 'repeatOff') {
      handleForwardDisabled(true);
      return;
    }
    handleForwardDisabled(false);
  }, [trackIdPlaying, repeat]);

  const setDuration = (data) => {
    setState((state) => ({
      ...state,
      totalLength: Math.floor(data.duration),
    }));
  };

  const setTime = (data) => {
    setState((state) => ({
      ...state,
      currentPosition: Math.floor(data.currentTime),
    }));
  };

  const seek = (time) => {
    time = Math.round(time);
    setState((state) => ({
      ...state,
      dragTime: time,
    }));
    handlePaused(false);
  };

  const handleOnForward = () => {
    if (trackIdPlaying < playing.length - 1) {
      handleTrackIdPlaying(trackIdPlaying + 1);
    }
    if (trackIdPlaying === playing.length - 1 && repeat !== 'repeatOff') {
      handleTrackIdPlaying(0);
    }
  };

  const handleOnBack = () => {
    if (trackIdPlaying > 0) {
      handleTrackIdPlaying(trackIdPlaying - 1);
    }
    if (trackIdPlaying === 0) {
      if (repeat !== 'repeatOff') {
        handleTrackIdPlaying(playing.length - 1);
      } else {
        setState((state) => ({
          ...state,
          reRender: state.reRender === '1' ? '0' : '1',
        }));
      }
    }
  };

  const onPressShuffle = () => {
    handleShuffleOn(!shuffleOn);
  };

  const onPressRepeat = () => {
    switch (repeat) {
      case 'repeatOff':
        handleRepeat('repeatOn');
        break;
      case 'repeatOn':
        handleRepeat('repeatOnce');
        break;
      case 'repeatOnce':
        handleRepeat('repeatOff');
        break;
      default:
        return;
    }
  };

  const track = tracks[trackId];

  const onLayout = (e) => {
    let isPortrait = e.nativeEvent.layout.height > e.nativeEvent.layout.width;
    if (isPortrait != state.isPortrait) {
      setState((state) => ({ ...state, isPortrait }));
    }
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Header text={track.title} backgroundColor="#000051" />
      <LinearGradient
        colors={['#E1E2E1', '#283593', '#001064']}
        style={styles.background}>
        <View
          style={state.isPortrait ? styles.contentPortrait : styles.content}>
          <View
            style={state.isPortrait ? styles.picturePortrait : styles.picture}>
            <Picture paused={paused} img={track.picture} type="large" />
          </View>
          <View style={styles.control}>
            <SeekBar
              onSeek={seek}
              trackLength={state.totalLength}
              onSlidingStart={() => handlePaused(true)}
              currentPosition={state.currentPosition}
            />
            <Control
              onPressPlay={() => handlePaused(false)}
              onPressPause={() => handlePaused(true)}
              onForward={handleOnForward}
              onBack={handleOnBack}
              paused={paused}
              onPressShuffle={onPressShuffle}
              shuffleOn={shuffleOn}
              onPressRepeat={onPressRepeat}
              repeat={repeat}
              forwardDisabled={isForwardDisabled}
            />
            <Video
              rate={1.0}
              volume={1.0}
              source={{ uri: track.audioUrl }} // Can be a URL or a local file.
              paused={paused}
              audioOnly={true}
              seek={state.dragTime || null}
              onLoad={setDuration} // Callback when video loads
              onProgress={setTime} // Callback every ~250ms with currentTime
              key={state.reRender}
              style={styles.audioElement}
              playInBackground={true}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  contentPortrait: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  picturePortrait: {
    flex: 1,
  },
  picture: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50,
  },
  control: {
    flex: 1,
  },
  audioElement: {
    display: 'none',
  },
});

export default Player;
