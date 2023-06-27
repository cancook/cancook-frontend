import React from 'react';
import CloseIconSVG from '@/public/svg/close-circle.svg';
import styled from '@emotion/styled';

const IngredientsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.screen.mobile} {
    width: 4.75rem;
    height: 2.5rem;
  }
  ${({ theme }) => theme.screen.tablet} {
    width: 4.75rem;
    height: 2.5rem;
  }
  ${({ theme }) => theme.screen.desktop} {
    width: 5.1875rem;
    height: 2.75rem;
  }
`;
const IngredientName = styled.span`
  color: ${({ theme }) => theme.colors.white[0]};
  ${({ theme }) => theme.screen.mobile} {
    ${({ theme }) => theme.font.body.md}
  }
  ${({ theme }) => theme.screen.tablet} {
    ${({ theme }) => theme.font.body.md}
  }
  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.title.sm}
    line-height: 1.9rem;
  }
`;

const CloseIcon = styled(CloseIconSVG)`
  cursor: pointer;
`;

type IngredientsTagProps = {
  name: string;
};

const IngredientsTag = ({ name }: IngredientsTagProps) => {
  return (
    <IngredientsWrapper>
      <IngredientName>{name}</IngredientName>
      <CloseIcon />
    </IngredientsWrapper>
  );
};

export default IngredientsTag;
