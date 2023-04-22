import { StoryFn } from '@storybook/react';
import FoodContentCard from '..';
import { ComponentProps } from 'react';

const FoodContentCardBody = {
  title: 'Component/FoodContentCard/Body',
  component: FoodContentCard.Body
};
export default FoodContentCardBody;

type BodyProps = ComponentProps<typeof FoodContentCard.Body>;

/**
 * 게시글의 본문을 보여주는 컴포넌트입니다.
 * 현재 구현은 다크 모드 기준으로 되어있으니 storybook의 테마를 dark로 변경해 주세요
 */
export const BodyTemplate: StoryFn<BodyProps> = (args) => (
  <FoodContentCard.Body {...args} />
);
BodyTemplate.args = {
  title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
  subTitle: '조회수 26만회 • 7일전'
};
