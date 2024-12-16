import { Button, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../navigation/types';
import { styles } from './styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Settings>;
}

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Schermata Settings</Text>
      <Button title={'Go to home'} onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SettingsScreen;
