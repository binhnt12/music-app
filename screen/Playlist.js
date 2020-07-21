import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import _ from 'lodash';

import Item from '../components/Item';
import Header from '../components/Header';
import Player from '../components/Player';
import Bottom from '../components/Bottom';

import { useModalState } from '../contexts/ModalContext';
import { useCategoryState } from '../contexts/CategoryContext';
import { usePlayingState } from '../contexts/PlayingContext';
import { TRACKS } from '../static/tracks';

const { height } = Dimensions.get('window');

const Playlist = ({ route }) => {
  const { isShowModal, showPlaylist } = useModalState();
  const {
    categoryId,
    selectedCategoryId,
    handleSelectedCategoryId,
  } = useCategoryState();
  const { shuffleOn, handleChange } = usePlayingState();

  const [translateY, setTranslateY] = useState(null);
  const [playing, setPlaying] = useState(TRACKS[selectedCategoryId]);
  const isFirstRun = useRef(true);
  const isFirstRunTwo = useRef(true);
  const showPlaylistRef = useRef(showPlaylist);
  const flatlistRef = useRef(null);
  const category = (route.params && route.params.category) || 'Bài hát';

  let translateValue = new Animated.Value(0);
  let playlist = TRACKS[selectedCategoryId];
  let playlistRef = TRACKS[selectedCategoryId];
  let playlistRefTwo = TRACKS[categoryId];

  useEffect(() => {
    flatlistRef.current.scrollToOffset({ animated: false, offset: 0 });
  }, [selectedCategoryId]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setTranslateY(translateModal);
    Animated.spring(translateValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [isShowModal]);

  useEffect(() => {
    if (isFirstRunTwo.current) {
      isFirstRunTwo.current = false;
      setPlaying(TRACKS[selectedCategoryId]);
      return;
    }
    setPlaying(playlistRef);
  }, [shuffleOn]);

  useEffect(() => {
    if (isFirstRunTwo.current) {
      isFirstRunTwo.current = false;
      return;
    }
    handleChange(false);
  }, [selectedCategoryId]);

  useEffect(() => {
    if (showPlaylist) {
      handleSelectedCategoryId(categoryId);
    }
  }, [showPlaylist]);

  const translateModal = translateValue.interpolate({
    inputRange: [0, 1],
    outputRange: isShowModal ? [height, 0] : [0, height],
  });

  playlistRef = useMemo(() => {
    if (showPlaylistRef.current !== showPlaylist) {
      showPlaylistRef.current = showPlaylist;
      if (shuffleOn) {
        return playlistRefTwo.current;
      }
      return TRACKS[categoryId];
    }
    if (shuffleOn) {
      playlistRefTwo.current = _.shuffle(TRACKS[categoryId]);
      return playlistRefTwo.current;
    }
    return TRACKS[categoryId];
  }, [shuffleOn, showPlaylist]);

  playlist = useMemo(() => {
    if ((shuffleOn && selectedCategoryId === categoryId) || showPlaylist) {
      return playlistRef;
    }
    return TRACKS[selectedCategoryId];
  }, [shuffleOn, selectedCategoryId, showPlaylist]);

  return (
    <View style={styles.container}>
      <Header text={category} noArrow backgroundColor="#000051" />
      <ImageBackground
        source={require('../img/background.jpg')}
        style={styles.backgroundOne}>
        <ImageBackground style={styles.backgroundTwo}>
          <FlatList
            ref={flatlistRef}
            data={playlist}
            renderItem={({ item, index }) => <Item item={item} index={index} />}
            keyExtractor={(item) => item.id + ''}
            contentContainerStyle={styles.flatlist}
          />
          <View style={styles.space} />
        </ImageBackground>
      </ImageBackground>
      <Animated.View
        style={[
          styles.modal,
          { transform: [{ translateY: translateY || height }] },
        ]}>
        {categoryId !== null && (
          <Player tracks={TRACKS[categoryId]} playing={playing} />
        )}
      </Animated.View>
      {categoryId !== null && (
        <Bottom tracks={TRACKS[categoryId]} playing={playing} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    paddingTop: 16,
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
    zIndex: 2,
  },
});

export default Playlist;
