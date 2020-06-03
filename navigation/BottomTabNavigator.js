import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from '../screen/Detail';
import Playlist from '../screen/Playlist';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="PlaylistlTab" component={Playlist} />
      <Tab.Screen name="DetailTab" component={Detail} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
