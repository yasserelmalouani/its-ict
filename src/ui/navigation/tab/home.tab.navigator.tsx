import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList, Screen } from '../types';
import HomeScreen from '../../screens/home.screen';
import SearchScreen from '../../screens/search.screen';
import React from 'react';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} initialParams={{ text: '' }} />
      <HomeStack.Screen name={Screen.Search} component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
