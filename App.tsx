import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/ui/navigation/root.stack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
