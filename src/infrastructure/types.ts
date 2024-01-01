export interface MutationOptions<Data> {
  onSuccess?: (data?: Data) => void;
  onError?: () => void;
}

export enum QueryKeys {
  FeederList = 'FeederList',
  FeederFindOne = 'FeederFindOne',
  UserFindOne = 'UserFindOne',
  FindFavoriteFeeder = 'FindFavoriteFeeder',
  FindAllFavorites = 'FindAllFavorites',
}
