import styled from '@emotion/styled';
import React from 'react';
import SearchIcon from '@/public/svg/search.svg';
import { useTheme } from '@emotion/react';

const Input = styled.input<{ isFocus: boolean }>`
  width: 100%;
  margin-left: 0.875rem;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.yellow[400]};
  border: none;
  outline: none;
`;

const InputWrapper = styled.div<{ isFocus: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  margin: auto;
  padding: 0.75rem 1rem;
  border-radius: 1.5rem;
  border: 0.0625rem solid
    ${({ theme, isFocus }) =>
      isFocus ? theme.colors.yellow[400] : theme.colors.gray[600]};
  background-color: ${({ theme }) => theme.colors.gray[800]};
  ${({ theme }) => theme.screen.desktop} {
    max-width: 50rem;
  }
`;

type SearchInputProps = {
  isFocus: boolean;
  [key: string]: any; // ...rest props
};

const SearchInput = ({
  isFocus,
  inputRef,
  handleFocus,
  handleBlur,
  ...props
}: SearchInputProps) => {
  const theme = useTheme();
  return (
    <InputWrapper isFocus={isFocus}>
      <SearchIcon
        fill={isFocus ? theme.colors.yellow[400] : theme.colors.gray[600]}
        style={{ cursor: 'pointer' }}
      />
      <Input
        ref={inputRef}
        type="text"
        placeholder="냉장고에 있는 재료를 적어주세요!"
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocus={isFocus}
        {...props}
      />
    </InputWrapper>
  );
};

export default SearchInput;
