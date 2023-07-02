import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import Loading from '.';

const LoadingComponent = {
  title: 'Component/Loading',
  component: Loading
};
export default LoadingComponent;

type LoadingProps = ComponentProps<typeof Loading>;

/**
 * 로딩시 보여지는 컴포넌트 입니다.
 */
export const LoadingTemplate: StoryFn<LoadingProps> = (args) => <Loading />;
LoadingTemplate.args = {};
