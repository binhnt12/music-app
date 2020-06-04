import React, { useRef, useEffect, useState, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/Header';
import Picture from './Picture';
import SeekBar from '../components/SeekBar';
import Control from '../components/Control';

const Player = ({ tracks, trackId }) => {
  const [state, setState] = useState({
    paused: false,
    totalLength: 1,
    currentPosition: 0,
    dragTime: null,
    selectedTrack: trackId,
    reRender: '1',
    isForwardDisabled: false,
  });
  // const [track, setTrack] = useState(tracks[trackId]);
  const audioElement = useRef(null);

  useEffect(() => {
    if (state.currentPosition >= state.totalLength) {
      handleOnForward();
    }
  }, [state.currentPosition]);

  useEffect(() => {
    if (state.selectedTrack === tracks.length - 1) {
      setState({ ...state, isForwardDisabled: true });
      return;
    }
    setState({ ...state, isForwardDisabled: false });
    // setTrack(tracks[state.selectedTrack]);
  }, [state.selectedTrack]);

  const setDuration = (data) => {
    setState({
      ...state,
      totalLength: Math.floor(data.duration),
    });
  };

  const setTime = (data) => {
    setState({
      ...state,
      currentPosition: Math.floor(data.currentTime),
    });
  };

  const seek = (time) => {
    time = Math.round(time);
    setState({
      ...state,
      dragTime: time,
      paused: false,
    });
  };

  const handleOnForward = () => {
    if (state.selectedTrack < tracks.length - 1) {
      setState({ ...state, selectedTrack: state.selectedTrack + 1 });
    }
  };

  const handleOnBack = () => {
    if (state.selectedTrack > 0) {
      setState({ ...state, selectedTrack: state.selectedTrack - 1 });
    }
    if (state.selectedTrack === 0) {
      setState({ ...state, reRender: state.reRender === '1' ? '0' : '1' });
    }
  };

  const track = useMemo(() => tracks[state.selectedTrack], [
    state.selectedTrack,
  ]);

  return (
    <View style={styles.container}>
      <Header text={track.title} backgroundColor="#000051" />
      <LinearGradient
        colors={['#E1E2E1', '#283593', '#001064']}
        style={styles.background}>
        <View style={styles.content}>
          <View style={styles.picture}>
            <Picture paused={state.paused} img={track.picture} />
          </View>
          <View style={styles.control}>
            <SeekBar
              onSeek={seek}
              trackLength={state.totalLength}
              onSlidingStart={() => setState({ ...state, paused: true })}
              currentPosition={state.currentPosition}
            />
            <Control
              onPressPlay={() => setState({ ...state, paused: false })}
              onPressPause={() => setState({ ...state, paused: true })}
              onForward={handleOnForward}
              onBack={handleOnBack}
              paused={state.paused}
              forwardDisabled={state.isForwardDisabled}
            />
            <Video
              rate={1.0}
              volume={1.0}
              source={{
                uri: track.audioUrl,
              }} // Can be a URL or a local file.
              ref={audioElement}
              paused={state.paused}
              seek={state.dragTime || null}
              onLoad={setDuration} // Callback when video loads
              onProgress={setTime} // Callback every ~250ms with currentTime
              key={state.reRender}
              style={styles.audioElement}
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
  content: {
    flex: 1,
  },
  picture: {
    flex: 1,
  },
  control: {
    flex: 1,
  },
  audioElement: {
    display: 'none',
  },
});

export default Player;
