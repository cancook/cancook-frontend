import React from 'react';
import CheckItem from '../common/CheckItem';
import Accordion from '../common/Accordion';
import IngredientsTitle from './IngredientsTitle';
import styled from '@emotion/styled';

export type screenProps = {
  description: string;
  ingredients: string[];
};

const PhoneScreen = ({ description, ingredients }: screenProps) => {
  return (
    <PhoneLayout>
      <Accordion isOpenInit={true} title="더보기">
        {description}
      </Accordion>
      <Accordion title={<IngredientsTitle />}>
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
