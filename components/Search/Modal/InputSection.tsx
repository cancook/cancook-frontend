import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../SearchInput';
import Autocomplete from '../Autocomplete';
import { getIngredientData } from '@/apis/search/getIngredientData';

type InputSectionProps = {
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const InputSection = ({ value, setValue }: InputSectionProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [autocompleteData, setAutocompleteData] = useState<string[]>([]);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  useEffect(() => {
    const delay = 1000; // 디바운스 지연 시간 (밀리초)
    const debounceId = setTimeout(async () => {
      if (value) {
        const { nameList } = await getIngredientData(value);

        setAutocompleteData(nameList);
      }
    }, delay);

    return () => {
      clearTimeout(debounceId);
    };
  }, [value]);

  return (
    <SearchInputContainer>
      {/* TODO: height 변경 */}
      <SearchInputWrapper>
        <SearchInput
          isFocus={isFocus}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleReset={handleReset}
          value={value}
          onChange={handleChange}
          className="search-input"
        />
        <Autocomplete isOpen={isFocus} keywords={autocompleteData} />
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
