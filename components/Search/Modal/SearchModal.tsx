import React, { useState } from 'react';
import { useCategoryIngredientList } from '@/hook/useCategoryIngredientList';
import InputSection from './InputSection';
import TabSection from './TabSection';
import ButtonSection from './ButtonSection';
import { getYoutubeFromIngredient } from '@/apis/search/getYoutubeFromIngredient';
import styled from '@emotion/styled';

const SearchModal = () => {
  const [selectedOnly, setSelectedOnly] = useState<boolean>(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const { list: categoryIngredientList, isLoading } =
    useCategoryIngredientList();

  // Reset All
  const reset = () => {
    setSelectedIngredients([]);
  };

  const handleSubmitSearchModal = () => {
    getYoutubeFromIngredient(selectedIngredients).then((res) => {
      console.log(
        '===선택된 ingredient들을 이용하여 youtube 검색을 진행합니다.==='
      );
      console.log(res);
    });
  };

  if (isLoading) return <SkeletonModal></SkeletonModal>;

  return (
    <div>
      <InputSection
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
      <TabSection
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        selectedOnly={selectedOnly}
        categoryIngredientList={categoryIngredientList}
      />
      <ButtonSection
        reset={reset}
        selectedOnly={selectedOnly}
        setSelectedOnly={setSelectedOnly}
        selectedIngredients={selectedIngredients}
        onSubmit={handleSubmitSearchModal}
      />
    </div>
  );
};

export default SearchModal;

const SkeletonModal = styled.div`
  height: 30rem;
`;
