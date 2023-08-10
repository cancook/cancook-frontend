// category 재료
type Ingredient = string;

// 카테고리 재료
type CategoryIngredient = {
  categoryName: string;
  ingredientNameList: Ingredient[];
};

// 자동입력 데이터
type AutocompleteIngredient = {
  nameList: string[];
};
