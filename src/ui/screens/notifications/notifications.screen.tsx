import { Button, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { styles } from './notifications.styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Notifications>;
}

const NotificationsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Schermata Notifiche</Text>
      <Button title={'Go to Settings'} onPress={() => navigation.navigate(Screen.Settings)} />
    </View>
  );
};

export default NotificationsScreen;
