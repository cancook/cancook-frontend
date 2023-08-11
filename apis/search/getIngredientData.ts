import axiosClient from '../axios';

/**
 * [GET]
 * category ingredients
 */
export const getIngredientData = async (word: string) => {
  const response = await axiosClient.get<AutocompleteIngredient>(
    '/search/get-ingredient-data',
    { params: { word } }
  );

  return response.data;
};
