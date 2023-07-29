import { TFood, TFoods } from '@src/types/common';

export function getFoodsLabel(foods?: TFoods): string {
  if (!foods) {
    return '';
  }

  const selectedFoods = Object.entries(foods)
    .filter(([_, isSelected]) => isSelected)
    .map(([food]) => translateFoodName(food as TFood));

  if (selectedFoods.length === 1) {
    return `Comida para ${selectedFoods[0]}`;
  }

  const filteredFoods = selectedFoods
    .filter(food => food !== 'outros')
    .map(food => `Comida para ${food}`);
  const joinedFoods = filteredFoods.join(` ${'\u2022'} `);

  const hasOtherFoods = selectedFoods.find(food => food === 'outros');

  if (hasOtherFoods) {
    return `${joinedFoods} ${'\u2022'} outros`;
  }

  return joinedFoods;
}

function translateFoodName(food: TFood) {
  const translatedFoodName = {
    dog: 'cachorros',
    cat: 'gatos',
    others: 'outros',
  };

  return translatedFoodName[food];
}
