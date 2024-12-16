import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './cart.styles';

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
  onPress: () => void;
}

const Card = ({ cart, onPress }: CartCardProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>USER CART: {cart.userId}</Text>
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
