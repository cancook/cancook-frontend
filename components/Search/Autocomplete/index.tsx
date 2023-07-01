import styled from '@emotion/styled';
import React from 'react';

const AutocompleteWrapper = styled.ul`
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  max-height: 23rem;
  border-radius: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  ${({ theme }) => theme.screen.desktop} {
    background-color: ${({ theme }) => theme.colors.white[0]};
  }
`;

const AutocompleteItem = styled.li`
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.font.title.sm}
  cursor: pointer;
  ${({ theme }) => theme.screen.desktop} {
    color: ${({ theme }) => theme.colors.gray[800]};
    :hover {
      background-color: ${({ theme }) => theme.colors.yellow[50]};
    }
  }
`;

type AutocompleteProps = {
  keywords: string[];
};

const Autocomplete = ({ keywords }: AutocompleteProps) => {
  return (
    <AutocompleteWrapper>
      {keywords.map((keyword, index) => (
        <AutocompleteItem key={`autocomplete-keyword-${index}`}>
          {keyword}
        </AutocompleteItem>
      ))}
    </AutocompleteWrapper>
  );
};

export default Autocomplete;
