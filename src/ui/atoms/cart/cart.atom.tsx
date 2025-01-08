import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './cart.styles';
import { Ionicons } from '@expo/vector-icons';

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

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CartCardProps {
  cart: Cart;
  selected: boolean;
  onPress: () => void;
  onAddFavorite: () => void;
}

const Card = ({ cart, selected, onAddFavorite, onPress }: CartCardProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>USER CART: {cart.userId}</Text>
          </View>
          <Ionicons
            onPress={onAddFavorite}
            name={selected ? 'heart-sharp' : 'heart-outline'}
            size={28}
            color={'#ffd700'}
          />
        </View>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: 'https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG-Picture.png',
            }}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.genericCardText}>Cart products: {cart.totalProducts}</Text>
        <Text style={[styles.genericCardText, styles.genericCardTextSpacing]}>
          Total cost: {cart.total} $
        </Text>
      </View>

      <TouchableOpacity style={styles.buyCartButton} onPress={onPress}>
        <Text style={styles.genericCardText}>BUY CART {cart.discountedTotal} $</Text>
      </TouchableOpacity>
    </>
  );
};

export default memo(Card);
