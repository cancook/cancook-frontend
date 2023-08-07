import styled from '@emotion/styled';
import React from 'react';
import SearchInput from '../SearchInput';

type InputSectionProps = {
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const InputSection = ({ value, setValue }: InputSectionProps) => {
  return (
    <SearhcInputContainer>
      {/* TODO: height 변경 */}
      <SearchInput
        isFocus={false}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        className="search-input"
      />
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
