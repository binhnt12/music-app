import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import { usePlayingState } from '../contexts/PlayingContext.js';
import { useModalState } from '../contexts/ModalContext.js';
import { useCategoryState } from '../contexts/CategoryContext.js';

const { width } = Dimensions.get('window');

const Item = ({ item }) => {
  const pad = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const [widthState, setWidthState] = useState(width);

  const {
    handlePaused,
    handleTrackId,
    handleShuffleOn,
    trackId,
  } = usePlayingState();
  const { handleShowModal } = useModalState();
  const {
    selectedCategoryId,
    categoryId,
    handleCategoryId,
  } = useCategoryState();

  const handleClick = (trackId) => {
    handleTrackId(trackId);
    handlePaused(false);
    handleCategoryId(selectedCategoryId);
    if (selectedCategoryId !== categoryId) {
      handleShuffleOn(false);
    }
    handleShowModal(true);
  };

  const active = trackId === item.id && categoryId === selectedCategoryId;

  const onLayout = (e) => {
    if (widthState !== e.nativeEvent.layout.width) {
      setWidthState(e.nativeEvent.layout.width);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleClick(item.id)}
      style={styles.container}
      onLayout={onLayout}>
      <View>
        <Text
          style={[
            styles.text,
            styles.number,
            active && {
              color: '#9c4dcc',
              fontWeight: 'bold',
            },
          ]}>
          {pad(item.id + 1)}
        </Text>
      </View>
      <Image source={{ uri: item.picture }} style={styles.img} />
      <View style={styles.content}>
        <Text
          numberOfLines={2}
          style={[
            styles.text,
            styles.title,
            { maxWidth: widthState - 120 },
            active && { color: '#9c4dcc' },
          ]}>
          {item.title}
        </Text>
        <Text
          numberOfLines={1}
          style={[
            styles.text,
            styles.singer,
            { maxWidth: widthState - 120 },
            active && { color: '#6a1b9a' },
          ]}>
          {item.singer}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  number: {
    marginRight: 16,
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    maxWidth: width - 120,
  },
  singer: {
    color: '#a0a0a0',
    maxWidth: width - 120,
  },
  img: {
    height: 64,
    width: 64,
    borderRadius: 4,
  },
  content: {
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
});

export default Item;
