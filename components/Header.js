import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { useModalState } from '../contexts/ModalContext';

import arrowDown from '../img/ic_keyboard_arrow_down_white.png';
import queueMusic from '../img/ic_queue_music_white.png';

let { width } = Dimensions.get('window');

const Header = ({ text, noArrow, backgroundColor }) => {
  const [widthState, setWidthState] = useState(width);

  const { handleShowModal } = useModalState();

  const onLayout = (e) => {
    if (widthState !== e.nativeEvent.layout.width) {
      setWidthState(e.nativeEvent.layout.width);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]} onLayout={onLayout}>
      <View style={styles.textAndArrowDown}>
        {!noArrow && (
          <TouchableOpacity
            style={styles.img}
            onPress={() => handleShowModal(false)}>
            <Image source={arrowDown} />
          </TouchableOpacity>
        )}
        <Text
          numberOfLines={1}
          style={[
            noArrow ? styles.textNoArrow : styles.text,
            { maxWidth: widthState - 120 },
          ]}>
          {text}
        </Text>
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
