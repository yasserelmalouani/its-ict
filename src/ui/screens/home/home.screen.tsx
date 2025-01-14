import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './home.styles';
import Card from '../../atoms/cart/cart.atom';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { useCarts } from '../hook/useCarts.facade';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../atoms/button/button.atom';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

enum FilterType {
  initial = 'initial',
  ascendent = 'ascendent',
  descendent = 'descendent',
}

const HomeScreen = ({ navigation }: Props) => {
  const { carts, setCarts, initialCarts, favoriteIds, refreshCarts, loadFavorites, addFavorite } =
    useCarts();
  const [filterType, setFilterType] = useState<FilterType>(FilterType.initial);

  // ** USE CALLBACK ** //
  const onFilterApply = useCallback(
    (type: FilterType) => {
      setFilterType(type);
      if (type === FilterType.initial) {
        // set initial carts
        setCarts(initialCarts);
        return;
      }
      const sortedCarts = carts.sort((a, b) => {
        if (type === FilterType.ascendent) {
          return a.totalQuantity - b.totalQuantity;
        }
        return b.totalQuantity - a.totalQuantity;
      });
      setCarts(sortedCarts);
    },
    [carts, initialCarts, setCarts]
  );

  const renderFilterButtons = useCallback(() => {
    return (
      <View style={styles.filtersContainer}>
        <Button onPress={() => onFilterApply(FilterType.descendent)}>
          <Ionicons
            name={'arrow-down'}
            size={24}
            color={filterType === FilterType.descendent ? 'green' : '#ffffff'}
          />
        </Button>
        <Button onPress={() => onFilterApply(FilterType.ascendent)}>
          <Ionicons
            name={'arrow-up'}
            size={24}
            color={filterType === FilterType.ascendent ? 'green' : '#ffffff'}
          />
        </Button>
        <Button
          onPress={() => onFilterApply(FilterType.initial)}
          disabled={filterType === FilterType.initial}>
          <Ionicons
            name={'refresh'}
            size={24}
            color={filterType !== FilterType.initial ? '#fff' : 'gray'}
          />
        </Button>
      </View>
    );
  }, [filterType, onFilterApply]);

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
      {renderFilterButtons()}

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
