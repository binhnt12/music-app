import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Picture from './Picture';
import { useModalState } from '../contexts/ModalContext';
import { usePlayingState } from '../contexts/PlayingContext';

let { width } = Dimensions.get('window');

const Bottom = ({ tracks }) => {
  const { handleShowModal } = useModalState();
  const {
    trackId,
    paused,
    handlePaused,
    handleNext,
    handlePrev,
    ratio,
  } = usePlayingState();

  const track = tracks[trackId];

  return (
    <View style={styles.container}>
      <View style={styles.seek}>
        <View style={[styles.playing, { width: `${ratio * 100}%` }]} />
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.imageAndContent}
          onPress={() => handleShowModal(true)}>
          <Picture paused={paused} img={track.picture} />
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.title}>
              {track.title}
            </Text>
            <Text numberOfLines={1} style={styles.singer}>
              {track.singer}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.control}>
          <TouchableOpacity onPress={() => handlePrev(true)}>
            <Icon name="skip-previous" size={35} />
          </TouchableOpacity>
          {paused ? (
            <TouchableOpacity onPress={() => handlePaused(false)}>
              <Icon name="play" size={35} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handlePaused(true)}>
              <Icon name="pause" size={35} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => handleNext(true)}>
            <Icon name="skip-next" size={35} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: 'white',
  },
  seek: {
    height: 3,
    width: '100%',
    backgroundColor: 'gray',
  },
  playing: {
    height: 3,
    backgroundColor: '#9c4dcc',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  imageAndContent: {
    flexDirection: 'row',
    flex: 1,
  },
  content: {
    paddingLeft: 8,
  },
  title: {
    color: 'black',
    fontSize: 14,
    width: width - 200,
  },
  singer: {
    color: '#a0a0a0',
    fontSize: 14,
    width: width - 200,
  },
  control: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    width: '100%',
  },
});

export default Bottom;
