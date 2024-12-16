import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../../screens/detail.screen';
import { TabParams, Screen } from '../types';
import HomeStackNavigator from './home.tab.navigator';

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
                : 'https://cdn-icons-png.flaticon.com/512/263/263142.png';
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
      <Tab.Screen name={Screen.Home} component={HomeStackNavigator} />
      <Tab.Screen name={Screen.Detail} component={DetailScreen} initialParams={{ item: '' }} />
    </Tab.Navigator>
  );
}
