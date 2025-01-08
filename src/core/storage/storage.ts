import { MMKV } from 'react-native-mmkv';

const MMKV_STORAGE = 'MMKV_STORAGE';

const mmkv = new MMKV({
  id: MMKV_STORAGE,
});

export const storage = {
  setItem: (key: string, value: string) => {
    return mmkv.set(key, value);
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return value ?? null;
  },
  removeItem: (key: string) => {
    return mmkv.delete(key);
  },
};
