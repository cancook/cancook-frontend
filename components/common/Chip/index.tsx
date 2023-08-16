import styled from '@emotion/styled';
import React from 'react';

const Chip = ({ count }: { count: number }) => {
  return (
    <ChipContainer>
      <span className="chip-counter">{count > 99 ? '99+' : count}</span>
    </ChipContainer>
  );
};

export default Chip;

const ChipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow[400]};

  .chip-counter {
    ${({ theme }) => theme.font.label.sm};
    color: ${({ theme }) => theme.colors.black[0]};
  }

  ${({ theme }) => theme.screen.desktop} {
    padding: 0.125rem 0.725rem;

    .chip-counter {
      ${({ theme }) => theme.font.headLine.sm};
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.75rem;
    }
  }
`;
