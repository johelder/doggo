export interface MutationOptions<Data> {
  onSuccess?: (data?: Data) => void;
  onError?: () => void;
}

export interface MutationParams<Params, Data> {
  mutationFn: (params: Params) => Promise<Data>;
  onSuccess?: MutationOptions<Data>['onSuccess'];
  onError?: MutationOptions<Data>['onError'];
}
