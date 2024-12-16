import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams, Screen } from '../types';
import HomeScreen from '../../screens/home/home.screen';
import SettingsScreen from '../../screens/settings.screen';

const Tab = createBottomTabNavigator<TabParams>();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: true,
          tabBarIcon: ({ focused }) => {
            const image =
              route.name === Screen.Home
                ? 'https://cdn-icons-png.flaticon.com/512/25/25694.png'
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1200px-Windows_Settings_app_icon.png';
            return (
              <Image
                source={{ uri: image }}
                style={{ width: 20, height: 20, tintColor: focused ? 'tomato' : 'gray' }}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        };
      }}>
      <Tab.Screen name={Screen.Home} component={HomeScreen} />
      <Tab.Screen name={Screen.Settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
