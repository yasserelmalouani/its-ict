import { FlatList, ListRenderItem, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { GenericCard } from '../../atoms/genericCard/genericCard.atom';
import { styles } from './detail.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CartDetailProduct {
  discountPercentage: number;
  discountedTotal: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
}

interface CartDetail {
  discountedTotal: number;
  id: number;
  products: CartDetailProduct[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
  route: RouteProp<MainParamList, Screen.Detail>;
}

const DetailScreen = ({ navigation, route }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  // ** DATA **
  const { id } = route.params;
  const [cart, setCart] = useState<CartDetail | null>(null);

  // ** USE EFFECTS ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts/' + id)
      .then((res) => res.json())
      .then(setCart);
  }, [id]);

  // ** UI **//
  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  const renderDetailItem = useCallback<ListRenderItem<CartDetailProduct>>(({ item }) => {
    return (
      <View style={styles.detailItem}>
        <GenericCard
          title={item.title}
          subTitle={String(item.price)}
          image={{ uri: item.thumbnail }}
          backgroundColor={'#2e67bd'}
        />
      </View>
    );
  }, []);
  return (
    <View style={[styles.container, { marginTop: top, marginBottom: bottom }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart?.products}
        renderItem={renderDetailItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default DetailScreen;
