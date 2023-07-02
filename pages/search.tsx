import Autocomplete from '@/components/Search/Autocomplete';
import EmptySearchResult from '@/components/Search/EmptySearchResult';
import SearchInput from '@/components/Search/SearchInput';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

const SearchBox = styled.div`
  position: relative;
  max-width: 22.5rem;
  margin: auto;
  ${({ theme }) => theme.screen.desktop} {
    width: 85rem;
    max-width: none;
    height: 22.0625rem;
    padding: 5rem 20rem 8.75rem 20rem;
    margin: 2.5rem auto;
    border-radius: 2.5rem;
    background-color: ${({ theme }) => theme.colors.black[60]};
    box-shadow: 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.5);
  }
`;
const Title = styled.h2`
  display: none;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 2.8125rem;
  letter-spacing: -0.0375rem;
  color: ${({ theme }) => theme.colors.white[0]};
  ${({ theme }) => theme.screen.desktop} {
    display: block;
  }
`;

const SearchResultWrapper = styled.div`
  margin-top: 3.125rem;
  display: flex;
  justify-content: center;
`;

const SearchPage = () => {
  const [keyword, setKeyword] = useState(' ');
  const [isFocus, setIsFocus] = useState(true);
  const inputFocus = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    inputFocus.current?.focus();
  }, []);
  return (
    <>
      <SearchBox>
        <Title>오늘은 어떤 재료로 요리할까?</Title>
        <SearchInput
          isFocus={isFocus}
          value={keyword}
          onChange={(e: any) => setKeyword(e.target.value)}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          inputRef={inputFocus}
        />
        <Autocomplete keywords={[keyword, '1', '2']} isOpen={isFocus} />
      </SearchBox>
      <SearchResultWrapper>
        <EmptySearchResult />
      </SearchResultWrapper>
    </>
  );
};

export default SearchPage;
