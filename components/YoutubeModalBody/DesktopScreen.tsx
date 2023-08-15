import React from 'react';
import CheckItem from '../common/CheckItem';
import Collapse from '../common/Collapse';
import IngredientsTitle from './IngredientsTitle';
import styled from '@emotion/styled';
import { screenProps } from './PhoneScreen';

const DesktopScreen = ({ description, ingredients }: screenProps) => {
  return (
    <>
      <Collapse>{description}</Collapse>
      <Box>
        <IngredientsTitle />
        {ingredients.map((ingredient, index) => {
          return (
            <CheckItem isChecked={false} key={index}>
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
