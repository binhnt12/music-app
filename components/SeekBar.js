import React from 'react';
import Slider from 'react-native-slider';
import { StyleSheet, View, Text } from 'react-native';

const pad = (n, width, z = 0) => {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const minutesAndSeconds = (position) => [
  pad(Math.floor(position / 60), 2),
  pad(Math.floor(position % 60), 2),
];

const SeekBar = ({ trackLength, currentPosition, onSlidingStart, onSeek }) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>{elapsed[0] + ':' + elapsed[1]}</Text>
        <View style={{ flex: 1 }} />
        <Text style={[styles.text, { width: 40 }]}>
          {trackLength > 1 && '-' + remaining[0] + ':' + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={trackLength}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        thumbTintColor="#283593"
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
      />
      <Text>Value: {currentPosition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 50,
  },
  text: {
    color: 'white',
  },
});

export default SeekBar;
