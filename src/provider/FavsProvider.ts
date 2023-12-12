import { atom } from 'recoil';

type FavsItem = {
  id: string;
  quantity: number;
};

export const favoritesItemsState = atom({
  key: 'favoritesItems',
  default: [] as FavsItem[],
});
