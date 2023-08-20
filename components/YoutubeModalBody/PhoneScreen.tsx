import React from 'react';
import CheckItem from '../common/CheckItem';
import Accordion from '../common/Accordion';
import IngredientsTitle from './IngredientsTitle';
import styled from '@emotion/styled';

export type screenProps = {
  haveIngredients: string[];
  description: string;
  ingredients: string[];
};

const PhoneScreen = ({
  haveIngredients,
  description,
  ingredients
}: screenProps) => {
  return (
    <PhoneLayout>
      <Accordion title="더보기">{description}</Accordion>
      <Accordion
        title={
          <IngredientsTitle
            count={haveIngredients.length}
            totalCount={ingredients.length}
          />
        }
      >
        {ingredients.map((ingredient, index) => {
          return (
            <CheckItem isChecked={false} key={index}>
              {ingredient}
            </CheckItem>
          );
        })}
      </Accordion>
    </PhoneLayout>
  );
};

export default PhoneScreen;

const PhoneLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.font.body.sm}
`;
