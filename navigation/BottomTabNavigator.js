import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from '../screen/Detail';
import Playlist from '../screen/Playlist';

import { useModalState } from '../contexts/ModalContext';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const { isShowModal } = useModalState();

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name="PlaylistlTab"
        component={Playlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="animation-play"
              size={25}
              color={focused ? '#283593' : '#a0a0a0'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.text}>
              Playlist
            </Text>
          ),
          tabBarVisible: !isShowModal,
        }}
      />
      <Tab.Screen name="DetailTab" component={Detail} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: '#a0a0a0',
  },
  textFocused: {
    fontSize: 12,
    color: '#283593',
  },
});

export default BottomTabNavigator;
