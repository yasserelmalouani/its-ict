import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { styles } from './home.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import Card from '../../atoms/cart/cart.atom';

interface Response {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

const HomeScreen = ({ navigation }: Props) => {
  const [carts, setCarts] = useState<Cart[]>([]);

  // ** CALLBACKS ** //

  const renderItem = useCallback<ListRenderItem<Cart>>(
    ({ item }) => {
      return (
        <Card
          cart={item}
          onPress={() => {
            if (!item.id) {
              return;
            }

            navigation.navigate(Screen.Detail, {
              id: item.id,
            });
          }}
        />
      );
    },
    [navigation]
  );

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  // ** USE EFFECT ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((response: Response) => setCarts(response.carts));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={carts}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
