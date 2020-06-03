import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Item = ({ item, navigation, tracks }) => {
  const pad = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PlayerModal', {
          tracks,
          trackId: item.id,
        })
      }
      style={styles.container}>
      <View>
        <Text style={[styles.text, styles.number]}>{pad(item.id + 1)}</Text>
      </View>
      <Text style={[styles.text, styles.title]}>{item.title}</Text>
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
    alignSelf: 'flex-start',
  },
});

export default Item;
