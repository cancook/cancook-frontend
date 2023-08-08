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
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [autocompleteData, setAutocompleteData] = useState<string[]>([]);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearhcInputContainer>
      {/* TODO: height 변경 */}
      <SearchInputWrapper>
        <SearchInput
          isFocus={isFocus}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={value}
          onChange={handleChange}
          className="search-input"
        />
        <Autocomplete isOpen={isFocus} keywords={autocompleteData} />
      </SearchInputWrapper>
    </SearhcInputContainer>
  );
};

export default InputSection;

// Search Container
const SearhcInputContainer = styled.div`
  padding: 0 1rem 0.5rem;

  ${({ theme }) => theme.screen.tablet} {
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;
