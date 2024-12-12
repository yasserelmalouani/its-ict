import HomeScreen from '../screens/home.screen';
import DetailScreen from '../screens/detail.screen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tab.navigator';
import { MainParamList, Screen } from './types';

const Stack = createNativeStackNavigator<MainParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
      <Stack.Screen name={Screen.Home} component={HomeScreen} />
      <Stack.Screen name={Screen.Detail} component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;
