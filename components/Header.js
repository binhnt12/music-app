import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { NavPlayerModal } from '../screen/PlayerModal';

import arrowDown from '../img/ic_keyboard_arrow_down_white.png';
import queueMusic from '../img/ic_queue_music_white.png';

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <NavPlayerModal.Consumer>
        {(navigation) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PlaylistlTab');
            }}>
            <Image style={styles.img} source={arrowDown} />
          </TouchableOpacity>
        )}
      </NavPlayerModal.Consumer>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity>
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
    backgroundColor: '#283593',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
  },
  img: {
    padding: 8,
  },
  text: {
    color: 'white',
  },
});

export default Header;
