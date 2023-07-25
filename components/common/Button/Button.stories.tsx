import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import Button from '.';

const ButtonComponent = {
  title: 'Component/common/Button',
  component: Button
};
export default ButtonComponent;

type ButtonProps = ComponentProps<typeof Button>;

const ButtonTemplate: StoryFn<ButtonProps> = ({ ...args }) => {
  return <Button {...args}>버튼</Button>;
};

/**
 * 메인 버튼 컴포넌트 입니다.
 */
export const Default = ButtonTemplate.bind({});
Default.args = {
  onClick: () => {
    console.log('버튼 클릭');
  },
  width: '32rem',
  height: '3.125rem'
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  width: '32rem',
  height: '3.125rem',
  disabled: true
};
