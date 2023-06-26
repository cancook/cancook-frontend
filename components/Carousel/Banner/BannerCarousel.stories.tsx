import { BANNER_DUMMY_DATA } from '@/constants/dummyData/banner';
import { MainContainer } from '@/pages';
import { StoryFn } from '@storybook/react';
import BannerCarousel, { BannerCarouselProps } from './BannerCarousel';

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
  banners: BANNER_DUMMY_DATA,
  isLoading: false
};
