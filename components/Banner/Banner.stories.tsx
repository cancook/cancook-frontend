import { BANNER_DUMMY_DATA } from '@/constants/dummyData/banner';
import { MainContainer } from '@/pages';
import { StoryFn } from '@storybook/react';
import Banner, { BannerProps } from './Banner';

const FoodContentCardStory = {
  title: 'Component/Banner',
  component: Banner
};
export default FoodContentCardStory;

const CardTemplate: StoryFn<BannerProps> = (props) => (
  <MainContainer>
    <Banner {...props} />
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
