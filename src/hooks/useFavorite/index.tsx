import React, {
  useEffect,
  useState,
  createContext,
  useCallback,
  useContext,
} from 'react';

import { FeederDomain } from '@data';
import { UsersRepository } from '@services';
import { errorHandler, showToast } from '@utils';

import { useAuth } from '../useAuth';

import { IFavoriteContextProps, IFavoriteProviderProps } from './types';

const FavoriteContext = createContext<IFavoriteContextProps>(
  {} as IFavoriteContextProps,
);

function FavoriteProvider({ children }: IFavoriteProviderProps) {
  const { user } = useAuth();
  const [favoritesList, setFavoritesList] = useState<
    (string | undefined)[] | undefined
  >(user?.favorites);

  const isFavorite = useCallback(
    (feederId: string | undefined) => {
      if (!feederId) {
        return false;
      }

      return !!favoritesList?.find(feeder => feeder === feederId);
    },
    [favoritesList],
  );

  const addFavorite = useCallback(
    async (feeder: FeederDomain) => {
      if (!user?.id || !feeder.id) {
        return;
      }

      await UsersRepository.addNewFavoriteFeeder(user.id, feeder.id);

      setFavoritesList(prevState => {
        if (prevState) {
          return [...prevState, feeder.id];
        }

        return [];
      });
    },
    [user?.id],
  );

  const removeFavorite = useCallback(
    async (feeder: FeederDomain) => {
      if (!user?.id || !feeder.id) {
        return;
      }

      await UsersRepository.removeFavoriteFeeder(user.id, feeder.id);

      setFavoritesList(prevState =>
        prevState?.filter(storedFeeder => storedFeeder !== feeder.id),
      );
    },
    [user?.id],
  );

  const handleToggleFavoriteFeeder = useCallback(
    async (feeder?: FeederDomain | null) => {
      try {
        if (!feeder) {
          return;
        }

        if (isFavorite(feeder.id)) {
          await removeFavorite(feeder);

          return;
        }

        await addFavorite(feeder);
      } catch (error) {
        errorHandler.reportError(error, handleToggleFavoriteFeeder.name);
        showToast({
          type: 'error',
          message: 'Ocorreu um erro ao favoritar, tente novamente mais tarde.',
          duration: 4000,
        });
      }
    },
    [addFavorite, isFavorite, removeFavorite],
  );

  useEffect(() => {
    if (user?.favorites) {
      setFavoritesList(user.favorites);
    }
  }, [user?.favorites]);

  return (
    <FavoriteContext.Provider
      value={{ isFavorite, handleToggleFavoriteFeeder }}>
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavorite() {
  return useContext(FavoriteContext);
}

export { FavoriteProvider, useFavorite };
