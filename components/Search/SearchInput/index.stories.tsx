import { StoryFn } from '@storybook/react';
import { ComponentProps, useState } from 'react';
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
export const SearchInputTemplate: StoryFn<SearchInputProps> = (args) => {
  const [isFocus, setIsFocus] = useState(true);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <SearchInput
      isFocus={isFocus}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};
// SearchInputTemplate.args = {
//   src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
//   children: '김코딩'
// };
