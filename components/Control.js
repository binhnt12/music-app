import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Control = ({
  paused,
  shuffleOn,
  repeat,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => {
  let renderRepeat;
  switch (repeat) {
    case 'repeatOn':
      renderRepeat = <Icon name="repeat" size={25} color="#9c4dcc" />;
      break;
    case 'repeatOff':
      renderRepeat = <Icon name="repeat" size={25} color="white" />;
      break;
    case 'repeatOnce':
      renderRepeat = <Icon name="repeat-once" size={25} color="#9c4dcc" />;
      break;
    default:
      renderRepeat = <Icon name="repeat" size={25} color="white" />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
        {shuffleOn ? (
          <Icon name="shuffle" size={25} color="#9c4dcc" />
        ) : (
          <Icon name="shuffle" size={25} color="white" />
        )}
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
        {renderRepeat}
      </TouchableOpacity>
    </View>
  );
};

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
