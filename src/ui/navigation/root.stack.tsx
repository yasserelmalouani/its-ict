import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tab/tab.navigator';
import { MainParamList, Screen } from './types';
import DetailScreen from '../screens/detail/detail.screen';

const Stack = createNativeStackNavigator<MainParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screen.TabNavigator} component={TabNavigator} />

      <Stack.Screen name={Screen.Detail} component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;
