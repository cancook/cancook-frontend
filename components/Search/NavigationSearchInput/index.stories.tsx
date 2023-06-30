import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import NavigationSearchInput from '.';

const NavSearchInputComponent = {
  title: 'Component/Search/NavSearchInput',
  component: NavigationSearchInput
};
export default NavSearchInputComponent;

type NavSearchInputProps = ComponentProps<typeof NavigationSearchInput>;

/**
 * 메인 검색 input 컴포넌트 입니다.
 */
export const NavSearchInputTemplate: StoryFn<NavSearchInputProps> = (args) => (
  <NavigationSearchInput {...args} />
);
// NavSearchInputTemplate.args = {
//   src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
//   children: '김코딩'
// };
