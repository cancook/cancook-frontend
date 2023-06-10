import { StoryFn } from '@storybook/react';
import BannerCarousel, { BannerCarouselProps } from './BannerCarousel';
import { YOUTUBE_BANNER_DUMMY_DATA } from '@/constants/dummyData/youtube';
import { MainContainer } from '@/pages';

const FoodContentCardStory = {
  title: 'Component/Banner Carousel',
  component: BannerCarousel
};
export default FoodContentCardStory;

const CardTemplate: StoryFn<BannerCarouselProps> = (props) => (
  <MainContainer>
    <BannerCarousel {...props} />
  </MainContainer>
);

/**
 * 메인 배너에 보여지는 썸네일 입니다.
 */
export const Default = CardTemplate.bind({});

Default.args = {
  contents: YOUTUBE_BANNER_DUMMY_DATA,
  isLoading: false
};
