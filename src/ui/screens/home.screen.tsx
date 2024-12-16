import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../navigation/types';
import { styles } from './styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(Screen.Detail)}>
        <Text>Vai alla schermata di dettaglio</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
