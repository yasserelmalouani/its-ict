import { useState, useCallback } from 'react';
import { PREFERRED_CARTS } from '../../../core/storage/types';
import { storage } from '../../../core/storage/storage';

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

export const useCarts = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [initialCarts, setInitialCarts] = useState<Cart[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const refreshCarts = useCallback(async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts');
      const data = await response.json();
      setInitialCarts([...data.carts]);
      setCarts([...data.carts]);
    } catch (error) {
      console.error('Error fetching carts:', error);
    }
  }, []);

  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = await storage.getItem(PREFERRED_CARTS);
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavoriteIds(parsedFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);

  const addFavorite = useCallback(
    async (item: Cart) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id)
        : [...favoriteIds, item.id];

      setFavoriteIds(updatedFavorites);
      await storage.setItem(PREFERRED_CARTS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds]
  );

  return {
    carts,
    setCarts,
    initialCarts,
    setInitialCarts,
    favoriteIds,
    refreshCarts,
    loadFavorites,
    addFavorite,
  };
};
