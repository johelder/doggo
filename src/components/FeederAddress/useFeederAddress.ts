import type { TFood, TFoods } from '@src/types/common';

export function useFeederAddress() {
  function getFoodsLabel(foods: TFoods): string {
    const selectedFoods = Object.entries(foods)
      .filter(([_, isSelected]) => isSelected)
      .map(([food]) => translateFoodName(food as TFood));

    if (selectedFoods.length === 1) {
      return `Comida para ${selectedFoods[0]}`;
    }

    const joinedFoods = selectedFoods.join(` ${'\u2022'} `);
    const hasOtherFoods = selectedFoods.find(food => food === 'outros');
    const formattedLabel = joinedFoods.replace(`outros ${'\u2022'} `, '');

    if (hasOtherFoods) {
      return `Comida para ${formattedLabel} ${'\u2022'} outros`;
    }

    return `Comida para ${formattedLabel}`;
  }

  function translateFoodName(food: TFood) {
    const translatedFoodName = {
      dog: 'cachorros',
      cat: 'gatos',
      others: 'outros',
    };

    return translatedFoodName[food];
  }

  return { getFoodsLabel };
}
