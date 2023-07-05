import { SearchIngredient } from '@/types/search';
import axiosClient from './axios';

export const getCategoryList = async () => {
  const response = await axiosClient.get<SearchIngredient[]>(
    '/search/ingredient-list'
  );

  return response.data;
};
