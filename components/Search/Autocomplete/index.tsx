import styled from '@emotion/styled';
import React from 'react';

const AutocompleteWrapper = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  max-height: 15rem;
  border-radius: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  z-index: 50;

  ${({ theme }) => theme.screen.tablet} {
    padding: 0.5rem 0;
  }
`;

const AutocompleteItem = styled.li`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.gray[100]};
  ${({ theme }) => theme.font.body.md}
  cursor: pointer;

  ${({ theme }) => theme.screen.tablet} {
    ${({ theme }) => theme.font.label.lg};
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
