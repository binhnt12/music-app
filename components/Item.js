import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useModalState } from '../contexts/ModalContext.js';

const Item = ({ item, tracks }) => {
  const pad = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const { handleTrackId, handleModalVisible } = useModalState();

  handleClick = (trackId) => {
    handleTrackId(trackId);
    handleModalVisible(true);
  };

  return (
    <TouchableOpacity
      onPress={() => handleClick(item.id)}
      style={styles.container}>
      <View>
        <Text style={[styles.text, styles.number]}>{pad(item.id + 1)}</Text>
      </View>
      <Image source={{ uri: item.picture }} style={styles.img} />
      <View style={styles.content}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={[styles.text, styles.singer]}>{item.singer}</Text>
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
