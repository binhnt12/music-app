import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { ModalProvider } from './contexts/ModalContext.js';
import { PlayingProvider } from './contexts/PlayingContext.js';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ModalProvider>
      <PlayingProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="root"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PlayingProvider>
    </ModalProvider>
  );
}
