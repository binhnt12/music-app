import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Control = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Image
        style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
        source={require('../img/ic_shuffle_white.png')}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    <TouchableOpacity onPress={onBack}>
      <Image source={require('../img/ic_skip_previous_white_36pt.png')} />
    </TouchableOpacity>
    <View style={{ width: 20 }} />
    {!paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Image source={require('../img/ic_pause_white_48pt.png')} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Image source={require('../img/ic_play_arrow_white_48pt.png')} />
        </View>
      </TouchableOpacity>
    )}
    <View style={{ width: 20 }} />
    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <Image
        style={[forwardDisabled && { opacity: 0.3 }]}
        source={require('../img/ic_skip_next_white_36pt.png')}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image
        style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
        source={require('../img/ic_repeat_white.png')}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 20,
  },
});

export default React.memo(Control);
