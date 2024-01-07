import { getFoodsLabel } from '../getFoodsLabel';

import {
  mockedCatFood,
  mockedDogAndCatFood,
  mockedDogCatAndOthersFoods,
  mockedDogFood,
  mockedOthersFoods,
} from './__mocks__/foods.mock';

describe('getFoodsLabel', () => {
  it('must return the dog food label correctly', () => {
    expect(getFoodsLabel(mockedDogFood)).toBe('Comida para cachorros');
  });

  it('must return the cat food label correctly', () => {
    expect(getFoodsLabel(mockedCatFood)).toBe('Comida para gatos');
  });

  it('must return the dog and cat food label correctly', () => {
    expect(getFoodsLabel(mockedDogAndCatFood)).toBe(
      'Comida para cachorros • Comida para gatos',
    );
  });

  it('must return the others foods label correctly', () => {
    expect(getFoodsLabel(mockedOthersFoods)).toBe('Comida para outros');
  });

  it('must return the dog, cat and others foods label correctly', () => {
    expect(getFoodsLabel(mockedDogCatAndOthersFoods)).toBe(
      'Comida para cachorros • Comida para gatos • outros',
    );
  });
});
