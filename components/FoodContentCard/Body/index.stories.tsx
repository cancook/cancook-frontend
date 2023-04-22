import { StoryFn } from '@storybook/react';
import FoodContentCard from '..';
import { ComponentProps } from 'react';

const FoodContentCardBody = {
  title: 'Component/FoodContentCard/Body',
  component: FoodContentCard.Body
};
export default FoodContentCardBody;

type BodyProps = ComponentProps<typeof FoodContentCard.Body>;
export const BodyTemplate: StoryFn<BodyProps> = (args) => (
  <FoodContentCard.Body {...args} />
);
BodyTemplate.args = {
  title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
  subTitle: '조회수 26만회 • 7일전'
};
