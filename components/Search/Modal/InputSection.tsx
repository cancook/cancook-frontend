import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../SearchInput';
import Autocomplete from '../Autocomplete';
import { getIngredientData } from '@/apis/search/getIngredientData';

type InputSectionProps = {
  selectedIngredients: string[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>;
};

const InputSection = ({
  selectedIngredients,
  setSelectedIngredients
}: InputSectionProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();
  const [autocompleteData, setAutocompleteData] = useState<string[]>([]);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue('');
    handleBlur();
  };

  // Autocomplete 에서 선택할시, 해당 item을 selected Ingredients에 추가한다.
  const handleAutocompleteSelect = (autocompleteItem: string) => {
    console.log(autocompleteItem);
    setSelectedIngredients((prev) => [...prev, autocompleteItem]);
    handleBlur();
  };

  useEffect(() => {
    const delay = 1000; // 디바운스 지연 시간 (밀리초)
    const debounceId = setTimeout(async () => {
      if (inputValue) {
        const { nameList } = await getIngredientData(inputValue);

        setAutocompleteData(nameList);
      }
    }, delay);

    return () => {
      clearTimeout(debounceId);
    };
  }, [inputValue]);

  return (
    <SearchInputContainer>
      {/* TODO: height 변경 */}
      <SearchInputWrapper>
        <SearchInput
          isFocus={isFocus}
          handleFocus={handleFocus}
          // handleBlur={handleBlur}
          handleReset={handleReset}
          value={inputValue}
          onChange={handleChange}
          className="search-input"
        />
        <Autocomplete
          isOpen={isFocus}
          keywords={autocompleteData}
          omit={selectedIngredients}
          onItemClick={handleAutocompleteSelect}
        />
      </SearchInputWrapper>
    </SearchInputContainer>
  );
};

export default InputSection;

// Search Container
const SearchInputContainer = styled.div`
  padding: 0 1rem 0.5rem;

  ${({ theme }) => theme.screen.tablet} {
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;
