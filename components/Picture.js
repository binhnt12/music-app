import React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const Picture = ({ paused, img, type }) => {
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
    <View
      style={type === 'large' ? styles.containerLarge : styles.containerSmall}>
      <Animated.Image
        style={[
          type === 'large' ? styles.imgLarge : styles.imgSmall,
          { transform: [{ rotate: spin }] },
        ]}
        source={{ uri: img }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLarge: {
    marginTop: 50,
    alignItems: 'center',
  },
  containerSmall: {},
  imgLarge: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  imgSmall: {
    height: 42,
    width: 42,
    borderRadius: 42 / 2,
  },
});

export default React.memo(Picture);
