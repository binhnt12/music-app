import React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const Picture = ({ paused, img }) => {
  let spinValue = new Animated.Value(0);

  const animated = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  paused ? animated.stop() : animated.start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.img, { transform: [{ rotate: spin }] }]}
        source={{ uri: img }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
});

export default React.memo(Picture);
