import type { TFoods } from '@src/types/common';

export function formatFoodsLabel(foods: TFoods) {
  const foodQuantities = Object.values(foods).filter(Boolean).length;

  if (foodQuantities === 1 && foods.others) {
    return 'Não especificado.';
  }
}
