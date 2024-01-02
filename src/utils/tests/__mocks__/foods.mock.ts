import { FoodDomain } from '@data';

export const mockedDogFood: { [key in keyof FoodDomain]: boolean } = {
  dog: true,
  cat: false,
  others: false,
};

export const mockedCatFood: { [key in keyof FoodDomain]: boolean } = {
  dog: false,
  cat: true,
  others: false,
};

export const mockedDogAndCatFood: { [key in keyof FoodDomain]: boolean } = {
  dog: true,
  cat: true,
  others: false,
};

export const mockedOthersFoods: { [key in keyof FoodDomain]: boolean } = {
  dog: false,
  cat: false,
  others: true,
};

export const mockedDogCatAndOthersFoods: {
  [key in keyof FoodDomain]: boolean;
} = {
  dog: true,
  cat: true,
  others: true,
};
