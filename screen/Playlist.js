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
import { useCategoryState } from '../contexts/CategoryContext';
import { TRACKS } from '../static/tracks';

const { height } = Dimensions.get('window');

const Playlist = () => {
  const { isShowModal } = useModalState();
  const { categoryId, selectedCategoryId } = useCategoryState();

  const [translateY, setTranslateY] = useState(null);
  const isFirstRun = useRef(true);

  let translateValue = new Animated.Value(0);

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

  const translateModal = translateValue.interpolate({
    inputRange: [0, 1],
    outputRange: isShowModal ? [height, 0] : [0, height],
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
            data={TRACKS[selectedCategoryId]}
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
        {categoryId && <Player tracks={TRACKS[categoryId]} />}
      </Animated.View>
      {categoryId && <Bottom tracks={TRACKS[categoryId]} />}
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
    zIndex: 2,
  },
});

export default Playlist;
