import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Picture from './Picture';
import { useModalState } from '../contexts/ModalContext';
import { usePlayingState } from '../contexts/PlayingContext';

const Bottom = ({ picture }) => {
  const { isShowModal, handleShowModal } = useModalState();
  const { paused, handlePaused, handleNext, handlePrev } = usePlayingState();

  return (
    <View style={styles.container}>
      <View style={styles.seek}>
        <View style={styles.playing} />
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.imageAndContent}
          onPress={() => handleShowModal(true)}>
          <Picture img={null} style={styles.img} />
          <View style={styles.content}>
            <Text style={styles.title}>Giac mo trua</Text>
            <Text style={styles.singer}>Thuy Chi</Text>
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
    height: 2,
    width: '100%',
    backgroundColor: 'gray',
  },
  playing: {
    height: 2,
    width: '60%',
    backgroundColor: '#9c4dcc',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 8,
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
  },
  singer: {
    color: '#a0a0a0',
    fontSize: 14,
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
