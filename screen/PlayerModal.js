import React from 'react';
import Player from '../components/Player';

let NavPlayerModal;
const PlayerModal = ({ navigation, route }) => {
  const { tracks, trackId } = route.params;
  NavPlayerModal = React.createContext(navigation);
  return <Player tracks={tracks} trackId={trackId} />;
};

export { PlayerModal, NavPlayerModal };
