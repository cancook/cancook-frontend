import styled from '@emotion/styled';
import React, { useState } from 'react';
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
  max-width: 18rem;
  padding: 0.75rem 1rem;
  border-radius: 1.5rem;
  border: 0.0625rem solid
    ${({ theme, isFocus }) =>
      isFocus ? theme.colors.yellow[400] : theme.colors.gray[600]};
  ${({ theme }) => theme.screen.desktop} {
    max-width: 50rem;
  }
`;

const NavSearchInput = ({ ...args }) => {
  const [isFocus, setIsFocus] = useState(false);
  const theme = useTheme();

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <InputWrapper isFocus={isFocus}>
      <SearchIcon
        fill={isFocus ? theme.colors.yellow[400] : theme.colors.gray[600]}
        style={{ cursor: 'pointer' }}
      />
      <Input
        type="text"
        placeholder="냉장고에 있는 재료를 적어주세요!"
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocus={isFocus}
        {...args}
      />
    </InputWrapper>
  );
};

export default NavSearchInput;
