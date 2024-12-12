import { Button, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
  route: RouteProp<MainParamList, Screen.Detail>;
}

const DetailScreen = ({ navigation, route }: Props) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>Schermata Dettagli</Text>
      <Text>Parametro ricevuto: {item}</Text>
      <Button title={'Go to home'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;
