import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import SearchInput from '.';

const SearchInputComponent = {
  title: 'Component/Search/SearchInput',
  component: SearchInput
};
export default SearchInputComponent;

type SearchInputProps = ComponentProps<typeof SearchInput>;

/**
 * 메인 검색 input 컴포넌트 입니다.
 */
export const SearchInputTemplate: StoryFn<SearchInputProps> = (args) => (
  <SearchInput {...args} />
);
// SearchInputTemplate.args = {
//   src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
//   children: '김코딩'
// };
