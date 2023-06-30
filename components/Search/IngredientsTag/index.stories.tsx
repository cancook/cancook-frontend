import { StoryFn } from '@storybook/react';
import IngredientsTag from '.';
import { ComponentProps } from 'react';

const IngredientsTagComponent = {
  title: 'Component/Search/IngredientsTag',
  component: IngredientsTag
};
export default IngredientsTagComponent;

type Props = ComponentProps<typeof IngredientsTag>;

/**
 * 검색창에 선택된 재료를 표시하는 컴포넌트
 */
const Template: StoryFn<Props> = (args) => <IngredientsTag {...args} />;

export const Potato = Template.bind({});

Potato.args = {
  name: '감자',
  onDeleteClick: () => {
    console.log('클릭');
  }
};
