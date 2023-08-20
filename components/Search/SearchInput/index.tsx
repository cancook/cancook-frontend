import styled from '@emotion/styled';
import React from 'react';
import CloseSquareIcon from '@/public/svg/close-square.svg';
import { useTheme } from '@emotion/react';

const Input = styled.input<{ isFocus: boolean }>`
  cursor: text;
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;

  ${({ theme }) => theme.font.label.lg};
  color: ${({ theme }) => theme.colors.gray[100]};
`;

const InputWrapper = styled.div<{ isFocus: boolean }>`
  cursor: text;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  margin: auto;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.screen.desktop} {
    max-width: 50rem;
    height: 3rem;
  }
`;

type SearchInputProps = {
  isFocus: boolean;
  onInputWrapperClick?: () => void;
  [key: string]: any; // ...rest props
};

const SearchInput = ({
  isFocus,
  inputRef,
  handleFocus,
  handleBlur,
  handleReset,
  onInputWrapperClick,
  ...props
}: SearchInputProps) => {
  const theme = useTheme();
  return (
    <InputWrapper isFocus={isFocus} onClick={onInputWrapperClick}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="냉장고에 있는 재료를 적어주세요!"
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocus={isFocus}
        {...props}
      />
      {handleReset && props.value && props.value.length > 0 && (
        <CloseSquareIcon style={{ cursor: 'pointer' }} onClick={handleReset} />
      )}
    </InputWrapper>
  );
};

export default SearchInput;
