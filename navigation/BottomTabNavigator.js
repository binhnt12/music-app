import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screen/Home';
import Playlist from '../screen/Playlist';

const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      tabBarOptions={{ showIcon: true, tabStyle: { padding: 0 } }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={25}
              color={focused ? '#283593' : '#a0a0a0'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.text}>Home</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Playlist"
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
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    color: '#a0a0a0',
  },
  textFocused: {
    fontSize: 11,
    color: '#283593',
  },
});

export default BottomTabNavigator;
