import { getCategoryIngredientList } from '@/apis/search/getCategoryIngredient';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

// 현재로서는 한번에 ingredient리스트를 전부 받아온다
export const useCategoryIngredientList = () => {
  const { data, ...rest } = useQuery(
    ['search/get-category-ingredient'],
    getCategoryIngredientList
  );

  // 우선 useMemo를 써서 memoization을 쓰긴 했는데, 꼭 필요한 부분인지는 고려 해봐야함.
  const categoryIngredientList: CategoryIngredient[] = useMemo(
    () => (data ? data : []),
    [data]
  );

  return { list: categoryIngredientList, ...rest };
};
