import { StoryFn } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import Autocomplete from '.';
import SearchInput from '../SearchInput';

const AutocompleteComponent = {
  title: 'Component/Search/Autocomplete',
  component: Autocomplete
};
export default AutocompleteComponent;

type AutocompleteProps = ComponentProps<typeof Autocomplete>;

/**
 * 검색시 자동 완성 토글 컴포넌트입니다.
 */
export const AutocompleteTemplate: StoryFn<AutocompleteProps> = (args) => {
  const [isFocus, setIsFocus] = useState(true);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div
      style={{
        maxWidth: '50rem',
        margin: 'auto'
      }}
    >
      <SearchInput
        isFocus={isFocus}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <Autocomplete
        keywords={[
          '키워드1',
          '키워드2',
          '키워드3',
          '키워드4',
          '키워드5',
          '키워드6',
          '키워드7',
          '키워드8',
          '키워드9'
        ]}
        isOpen={isFocus}
      />
    </div>
  );
};
