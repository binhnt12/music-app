import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { usePlayingState } from '../contexts/PlayingContext.js';

const Item = ({ item }) => {
  const pad = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const { handlePaused, handleTrackId, trackId } = usePlayingState();

  const handleClick = (trackId) => {
    handleTrackId(trackId);
    handlePaused(false);
  };

  return (
    <TouchableOpacity
      onPress={() => handleClick(item.id)}
      style={styles.container}>
      <View>
        <Text
          style={[
            styles.text,
            styles.number,
            trackId === item.id && { color: '#9c4dcc', fontWeight: 'bold' },
          ]}>
          {pad(item.id + 1)}
        </Text>
      </View>
      <Image source={{ uri: item.picture }} style={styles.img} />
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            styles.title,
            trackId === item.id && { color: '#9c4dcc' },
          ]}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.text,
            styles.singer,
            trackId === item.id && { color: '#6a1b9a' },
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
  },
  singer: {
    color: '#a0a0a0',
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
