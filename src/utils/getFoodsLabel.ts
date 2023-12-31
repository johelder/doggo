import { FoodDomain } from '@data';

export function getFoodsLabel(foods: {
  [key in keyof FoodDomain]: boolean;
}): string {
  const selectedFoods = Object.entries(foods)
    .filter(([_, isSelected]) => isSelected)
    .map(([food]) => translateFoodName(food as keyof FoodDomain));

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

function translateFoodName(food: keyof FoodDomain) {
  const translatedFoodName = {
    dog: 'cachorros',
    cat: 'gatos',
    others: 'outros',
  };

  return translatedFoodName[food];
}
