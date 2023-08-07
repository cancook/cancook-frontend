import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import CheckItem from '.';

const CheckItemComponent = {
  title: 'Component/common/CheckItem',
  component: CheckItem
};
export default CheckItemComponent;

type CheckItemProps = ComponentProps<typeof CheckItem>;

const CheckItemTemplate: StoryFn<CheckItemProps> = ({ ...args }) => {
  return <CheckItem {...args}>체크리스트 </CheckItem>;
};

/**
 * 체크 리스트 컴포넌트 입니다.
 */
export const checked = CheckItemTemplate.bind({});
checked.args = {
  isChecked: true
};

export const unchecked = CheckItemTemplate.bind({});
unchecked.args = {
  isChecked: false
};
