import { useState } from 'react';
import { TFood, TFoods } from '@src/types/common';

export function useFeederCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleToggleCollapseSession() {
    setIsCollapsed(prevState => !prevState);
  }

  function getFoodsLabel(foods: TFoods): string {
    const selectedFoods = Object.entries(foods)
      .filter(([_, isSelected]) => isSelected)
      .map(([food]) => translateFoodName(food as TFood));

    if (selectedFoods.length === 1) {
      return `Comida para ${selectedFoods[0]}`;
    }

    const lastFood = selectedFoods.pop();
    const joinedFoods = selectedFoods.join(', ');

    return `Comida para ${joinedFoods} e ${lastFood}`;
  }

  function translateFoodName(food: TFood) {
    const translatedFoodName = {
      dog: 'cachorros',
      cat: 'gatos',
      others: 'outros',
    };

    return translatedFoodName[food];
  }

  return { isCollapsed, handleToggleCollapseSession, getFoodsLabel };
}
