import { FlatList, ListRenderItem, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { GenericCard } from '../../atoms/genericCard/genericCard.atom';
import { styles } from './detail.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../atoms/button/button.atom';

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
  const { id, idsArray } = route.params;
  const [cart, setCart] = useState<CartDetail | null>(null);

  const currentIndex = useMemo(() => idsArray.indexOf(id), [id, idsArray]);

  const backIconColor = useMemo(() => (currentIndex > 0 ? '#616b79' : '#cccccc'), [currentIndex]);
  const forwardIconColor = useMemo(
    () => (currentIndex < idsArray.length - 1 ? '#616b79' : '#cccccc'),
    [currentIndex, idsArray.length]
  );

  // ** CALLBACKS ** //
  const handleBack = useCallback(() => {
    const nextId = idsArray[currentIndex - 1];
    if (!nextId) {
      return;
    }
    navigation.setParams({ id: nextId });
  }, [currentIndex, idsArray, navigation]);

  const handleNext = useCallback(() => {
    const nextId = idsArray[currentIndex + 1];
    if (!nextId) {
      return;
    }
    navigation.setParams({ id: nextId });
  }, [currentIndex, idsArray, navigation]);

  // ** USE EFFECTS ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts/' + id)
      .then((res) => res.json())
      .then(setCart);
  }, [id]);

  // ** UI **//

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

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  return (
    <View style={[styles.container, { marginTop: top, marginBottom: bottom }]}>
      <View style={styles.navigatorContainer}>
        <Ionicons
          name={'chevron-back-circle'}
          size={24}
          onPress={handleBack}
          color={backIconColor}
        />
        <Ionicons
          name={'chevron-forward-circle'}
          size={24}
          onPress={handleNext}
          color={forwardIconColor}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart?.products}
        renderItem={renderDetailItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      <Button title={'Torna indietro'} onPress={navigation.goBack} />
    </View>
  );
};

export default DetailScreen;
