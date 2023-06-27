import { StoryFn } from '@storybook/react';
import EmptySearchResult from '.';
import { ComponentProps } from 'react';

const EmptySearchResultComponent = {
  title: 'Component/EmptySearchResult',
  component: EmptySearchResult
};
export default EmptySearchResultComponent;

type EmptySearchResultProps = ComponentProps<typeof EmptySearchResult>;

/**
 * 검색 결과가 없을 때 보여주는 컴포넌트입니다.
 */
export const EmptySearchResultTemplate: StoryFn<EmptySearchResultProps> = (
  args
) => <EmptySearchResult />;
