import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../navigation/types';
import { styles } from './styles';
import { RouteProp } from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.HomeMain>;
  route: RouteProp<MainParamList, Screen.HomeMain>;
}

const HomeScreen = ({ navigation, route }: Props) => {
  const [textState, setTextState] = useState('');
  const { text } = route.params;
  useEffect(() => {
    if (!text) {
      return;
    }
    setTextState(text);
  }, [text]);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(Screen.Search)}>
        <Text>Vai alla schermata di ricerca</Text>
      </Pressable>
      <Text>testo cercato: {textState}</Text>
    </View>
  );
};

export default HomeScreen;
