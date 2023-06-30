import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import Header from './Header';
import CardCarouselContainer from '../Carousel/Card/CardCarouselContainer';
import { YOUTUBE_CATEGORY_DUMMY_DATA } from '@/constants/dummyData/youtube';
import Layout from './Layout';

const HeaderComponent = {
  title: 'Component/Header',
  component: Header
};
export default HeaderComponent;

type Props = ComponentProps<typeof Header>;

/**
 * 메인 페이지 네비게이션 바
 */
export const Template: StoryFn<Props> = (args) => {
  return (
    <>
      <Layout>
        <CardCarouselContainer contents={YOUTUBE_CATEGORY_DUMMY_DATA[0]} />
      </Layout>
    </>
  );
};
