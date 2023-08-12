import { getCategoryIngredientList } from '@/apis/search/getCategoryIngredient';
import { useQuery } from '@tanstack/react-query';

// 현재로서는 한번에 ingredient리스트를 전부 받아온다
export const useCategoryIngredientList = () => {
  const { data, ...rest } = useQuery(
    ['search/get-category-ingredient'],
    getCategoryIngredientList
  );

  return { list: data ?? [], ...rest };
};
