import axiosClient from '../axios';

/**
 * [GET]
 * category ingredients
 */
export const getCategoryIngredientList = async () => {
  const response = await axiosClient.get<CategoryIngredient[]>(
    '/search/get-category-ingredient'
  );

  return response.data;
};
