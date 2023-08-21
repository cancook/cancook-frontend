import React from 'react';
import CheckItem from '../common/CheckItem';
import Collapse from '../common/Collapse';
import IngredientsTitle from './IngredientsTitle';
import styled from '@emotion/styled';
import { screenProps } from './PhoneScreen';

const DesktopScreen = ({
  haveIngredients,
  description,
  ingredients
}: screenProps) => {
  const count = haveIngredients.filter((item) =>
    ingredients.includes(item)
  ).length;

  return (
    <>
      <Collapse>{description}</Collapse>
      <Box>
        <IngredientsTitle count={count} totalCount={ingredients.length} />
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
      </Box>
    </>
  );
};

export default DesktopScreen;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem;
  border-radius: 1rem;
`;
