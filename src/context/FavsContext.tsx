import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type FavouritesProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type FavouritesContext = {
  clearFavorites: () => void;
  favoritesItems: CartItem[];
  addToFavorites: (id: string) => void;
  checkInFav: (id: string) => boolean;
};

const FavouritesContext = createContext({} as FavouritesContext);

export function useFavourites() {
  return useContext(FavouritesContext);
}

export function FavouritesProvider({ children }: FavouritesProviderProps) {
  const [favoritesItems, setFavoritesItems] = useLocalStorage<CartItem[]>(
    'favorites-items',
    [],
  );

  const checkInFav = (id: string) => {
    return favoritesItems.some(item => item.id === id);
  };

  const addToFavorites = (id: string) => {
    const existingFavsItem = favoritesItems.find(
      (item: CartItem) => item.id === id,
    );

    if (existingFavsItem) {
      setFavoritesItems((favoritesItems: CartItem[]) =>
        favoritesItems.filter(item => item.id !== existingFavsItem.id),
      );
    } else {
      setFavoritesItems((favoritesItems: CartItem[]) => [
        ...favoritesItems,
        { id: id, quantity: 1 },
      ]);
    }
  };

  const clearFavorites = () => {
    setFavoritesItems([]);
  };

  return (
    <FavouritesContext.Provider
      value={{
        clearFavorites,
        favoritesItems,
        addToFavorites,
        checkInFav,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
