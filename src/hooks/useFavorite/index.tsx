import React, { useEffect, useState } from 'react';
import { createContext, useCallback, useContext } from 'react';
import type { IFavoriteContextProps, IFavoriteProviderProps } from './types';
import { useAuth } from '../useAuth';
import { IDomainFeeder } from '@src/types/domain';
import { UsersRepository } from '@src/services/database/repositories/UsersRepository';
import { errorHandler, showToast } from '@src/utils';

const FavoriteContext = createContext<IFavoriteContextProps>(
  {} as IFavoriteContextProps,
);

function FavoriteProvider({ children }: IFavoriteProviderProps) {
  const { user } = useAuth();
  const [favoritesList, setFavoritesList] = useState<
    IDomainFeeder[] | undefined
  >(user?.favorites);

  const isFavorite = useCallback(
    (feederId: string | undefined) => {
      if (!feederId) {
        return false;
      }

      return !!favoritesList?.find(feeder => feeder.id === feederId);
    },
    [favoritesList],
  );

  const addFavorite = useCallback(
    async (feeder: IDomainFeeder) => {
      if (!user?.id) {
        return;
      }

      await UsersRepository.addNewFavoriteFeeder(user.id, feeder);

      setFavoritesList(prevState => {
        if (prevState) {
          return [...prevState, feeder];
        }
      });
    },
    [user?.id],
  );

  const removeFavorite = useCallback(
    async (feeder: IDomainFeeder) => {
      if (!user?.id) {
        return;
      }

      await UsersRepository.removeFavoriteFeeder(user.id, feeder);

      setFavoritesList(prevState =>
        prevState?.filter(storedFeeder => storedFeeder.id !== feeder.id),
      );
    },
    [user?.id],
  );

  const handleToggleFavoriteFeeder = useCallback(
    async (feeder: IDomainFeeder | null) => {
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
