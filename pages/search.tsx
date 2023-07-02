import EmptySearchResult from '@/components/Search/EmptySearchResult';
import SearchInput from '@/components/Search/SearchInput';
import styled from '@emotion/styled';
import React from 'react';

const SearchBox = styled.div`
  width: 85rem;
  height: 22.0625rem;
  padding: 5rem 20rem 8.75rem 20rem;
  margin: 2.5rem auto;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.colors.black[60]};
  box-shadow: 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.5);
`;
const Title = styled.h2`
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 2.8125rem;
  letter-spacing: -0.0375rem;
  color: ${({ theme }) => theme.colors.white[0]};
`;

const SearchResultWrapper = styled.div`
  margin-top: 3.125rem;
  display: flex;
  justify-content: center;
`;

const SearchPage = () => {
  return (
    <>
      <SearchBox>
        <Title>오늘은 어떤 재료로 요리할까?</Title>
        <SearchInput initialFocus={true} />
      </SearchBox>
      <SearchResultWrapper>
        <EmptySearchResult />
      </SearchResultWrapper>
    </>
  );
};

export default SearchPage;
