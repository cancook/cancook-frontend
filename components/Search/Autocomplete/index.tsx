import styled from '@emotion/styled';
import React from 'react';

const AutocompleteWrapper = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  max-height: 23rem;
  border-radius: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.screen.desktop} {
    position: relative;
    background-color: ${({ theme }) => theme.colors.gray[800]};
  }
`;

const AutocompleteItem = styled.li`
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.font.title.sm}
  cursor: pointer;
  ${({ theme }) => theme.screen.desktop} {
    color: ${({ theme }) => theme.colors.gray[100]};
    :hover {
      background-color: #ffc04319;
    }
  }
`;

type AutocompleteProps = {
  keywords: string[];
  isOpen: boolean;
};

const Autocomplete = ({ keywords, isOpen }: AutocompleteProps) => {
  return (
    <AutocompleteWrapper isOpen={isOpen}>
      {keywords.map((keyword, index) => (
        <AutocompleteItem key={`autocomplete-keyword-${index}`}>
          {keyword}
        </AutocompleteItem>
      ))}
    </AutocompleteWrapper>
  );
};

export default Autocomplete;
