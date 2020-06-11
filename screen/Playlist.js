import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';

import Item from '../components/Item';
import Header from '../components/Header';
import Player from '../components/Player';
import Bottom from '../components/Bottom';

import { useModalState } from '../contexts/ModalContext';
import { usePlayingState } from '../contexts/PlayingContext';
import { TRACKS } from '../static/tracks';

const { height } = Dimensions.get('window');

const Playlist = () => {
  const { isShowModal } = useModalState();
  const { trackId } = usePlayingState();
  const [translateY, setTranslateY] = useState(null);

  let translateToTopValue = new Animated.Value(0);
  let translateToBottomValue = new Animated.Value(0);

  useEffect(() => {
    isShowModal
      ? setTranslateY(translateToTop)
      : setTranslateY(translateToBottom);
    if (isShowModal) {
      Animated.timing(translateToTopValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    if (!isShowModal) {
      Animated.timing(translateToBottomValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isShowModal]);

  const translateToTop = translateToTopValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  const translateToBottom = translateToBottomValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  return (
    <View style={styles.container}>
      <Header text="Bài hát" noArrow backgroundColor="#000051" />
      <ImageBackground
        source={require('../img/background.jpg')}
        style={styles.backgroundOne}>
        <ImageBackground style={styles.backgroundTwo}>
          <FlatList
            style={styles.flatlist}
            data={TRACKS}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id + ''}
          />
        </ImageBackground>
      </ImageBackground>
      <Animated.View
        style={[
          styles.modal,
          { transform: [{ translateY: translateY || height }] },
        ]}>
        <Player tracks={TRACKS} />
      </Animated.View>
      <Bottom track={TRACKS[trackId]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    paddingTop: 16,
    paddingBottom: 0,
  },
  backgroundOne: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundTwo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 81, 0.8)',
  },
  modal: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
});

export default Playlist;
