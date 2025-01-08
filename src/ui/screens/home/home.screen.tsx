import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './home.styles';
import Card from '../../atoms/cart/cart.atom';
import { useCarts } from '../hook/useCarts.facade';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  const { carts, favoriteIds, refreshCarts, loadFavorites, addFavorite } = useCarts();

  // ** USE CALLBACK ** //
  const renderItem = useCallback(
    ({ item }) => (
      <Card
        cart={item}
        onAddFavorite={() => addFavorite(item)}
        selected={favoriteIds.includes(item.id)}
        onPress={() => {
          if (!item.id) {
            return;
          }
          navigation.navigate(Screen.Detail, {
            id: item.id,
            idsArray: carts.map((el) => el.id),
          });
        }}
      />
    ),
    [addFavorite, carts, favoriteIds, navigation]
  );

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  // ** USE EFFECT ** //
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Favorites screen focused');
      refreshCarts();
      loadFavorites();
    });

    return unsubscribe;
  }, [loadFavorites, navigation, refreshCarts]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={carts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default HomeScreen;
