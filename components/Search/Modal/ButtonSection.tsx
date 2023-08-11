import Button from '@/components/common/Button';
import Toggle from '@/components/common/Toggle';
import RefreshSvg from '@/public/svg/refresh.svg';
import styled from '@emotion/styled';
import React from 'react';

type ButtonSectionProps = {
  reset: () => void;
  selectedOnly: boolean;
  setSelectedOnly: React.Dispatch<React.SetStateAction<boolean>>;

  selectedIngredients: string[];
  onSubmit: () => void;
};

const ButtonSection = ({
  reset,
  selectedOnly,
  setSelectedOnly,
  selectedIngredients,
  onSubmit
}: ButtonSectionProps) => {
  const handleToggleChange = () => {
    setSelectedOnly((prev) => !prev);
  };

  return (
    <ButtonContainer>
      <OptionalButtonContainer>
        <RefreshButton onClick={reset}>
          <RefreshSvg />
          <span className="optional-button-label">전체 초기화</span>
        </RefreshButton>
        <SelectedToggleWrapper
          onChange={handleToggleChange}
          onClick={handleToggleChange}
        >
          <div className="optional-button-label">선택 재료만</div>
          <Toggle checked={selectedOnly} />
        </SelectedToggleWrapper>
      </OptionalButtonContainer>
      <SubmitButtonContainer>
        <SubmitButton
          disabled={selectedIngredients.length === 0}
          onClick={onSubmit}
        >
          레시피 찾기
        </SubmitButton>
      </SubmitButtonContainer>
    </ButtonContainer>
  );
};

export default ButtonSection;

// Button Container
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
  padding: 0.5rem 1.5rem 2rem;

  ${({ theme }) => theme.screen.tablet} {
    position: relative;
  }
`;

const OptionalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .optional-button-label {
    ${({ theme }) => theme.font.body.sm};
    color: rgba(255, 255, 255, 0.5);
  }
`;

const RefreshButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;

  border: none;
  outline: none;
  background: none;
`;

const SelectedToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
`;

const SubmitButtonContainer = styled.div`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  padding: 0.69rem 0;
`;
