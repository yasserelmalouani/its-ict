import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tab/tab.navigator';
import { MainParamList, Screen } from './types';
import SearchScreen from '../screens/search.screen';

const Stack = createNativeStackNavigator<MainParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
        <Stack.Screen name={Screen.Search} component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default RootStack;
