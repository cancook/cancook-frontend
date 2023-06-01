import { StoryFn } from '@storybook/react';
import Header from './Header';

const HeaderStory = {
  title: 'Component/Header',
  component: Header
};
export default HeaderStory;

/**
 * 메인 썸네일 입니다.
 */

export const HeaderTemplate: StoryFn = () => <Header />;
