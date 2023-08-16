import React, { useState } from 'react';
import { useCategoryIngredientList } from '@/hook/useCategoryIngredientList';
import InputSection from './InputSection';
import TabSection from './TabSection';
import ButtonSection from './ButtonSection';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { closeModal } from '@/provider/ModalState';

const SearchModal = () => {
  const [selectedOnly, setSelectedOnly] = useState<boolean>(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const router = useRouter();

  const { list: categoryIngredientList, isLoading } =
    useCategoryIngredientList();

  // Reset All
  const reset = () => {
    setSelectedIngredients([]);
  };

  const handleSubmitSearchModal = () => {
    closeModal();
    router.push(`/result?ingredients=${selectedIngredients.join(',')}`);
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
