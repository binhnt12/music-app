import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { useModalState } from '../contexts/ModalContext';

import arrowDown from '../img/ic_keyboard_arrow_down_white.png';
import queueMusic from '../img/ic_queue_music_white.png';

const Header = ({ text, noArrow, backgroundColor }) => {
  const { handleModalVisible } = useModalState();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.textAndArrowDown}>
        {!noArrow && (
          <TouchableOpacity
            style={styles.img}
            onPress={() => handleModalVisible(false)}>
            <Image source={arrowDown} />
          </TouchableOpacity>
        )}
        <Text style={noArrow ? styles.textNoArrow : styles.text}>{text}</Text>
      </View>
      <TouchableOpacity style={noArrow ? styles.queueNoArrow : null}>
        <Image source={queueMusic} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingRight: 16,
  },
  textAndArrowDown: {
    flexDirection: 'row',
  },
  img: {
    padding: 16,
  },
  imgNoArrow: {
    display: 'none',
  },
  queueNoArrow: {
    display: 'none',
  },
  text: {
    color: 'white',
    marginLeft: 0,
    alignSelf: 'center',
    fontSize: 16,
  },
  textNoArrow: {
    color: 'white',
    marginLeft: 16,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
});

export default Header;
