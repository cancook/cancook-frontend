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
  const count = haveIngredients.filter((item) =>
    ingredients.includes(item)
  ).length;
  return (
    <PhoneLayout>
      <Accordion isOpenInit={true} title="더보기">{description}</Accordion>
      <Accordion
        title={ 
          <IngredientsTitle count={count} totalCount={ingredients.length} />
        }
      >
        {ingredients.map((ingredient, index) => {
          return (
            <CheckItem
              isChecked={haveIngredients.includes(ingredient)}
              key={index}
            >
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
