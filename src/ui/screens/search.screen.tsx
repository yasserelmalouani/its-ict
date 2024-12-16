import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { MainParamList, Screen } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Search>;
}

const SearchScreen = ({ navigation }: Props) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Cerca..." value={text} onChangeText={setText} />
      <Button
        title="Applica filtro"
        onPress={() => {
          navigation.popToTop();
          navigation.navigate(Screen.HomeMain, { text });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default SearchScreen;
