export type TFood = 'dog' | 'cat' | 'others';

export type TFoods = {
  [K in TFood]: boolean;
};
