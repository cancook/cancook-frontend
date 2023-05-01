import { StoryFn } from '@storybook/react';
import BannerCarousel from './BannerCarousel';
import { ComponentProps } from 'react';
import FoodContentCard from '../FoodContentCard';

const SAMPLE_BANNER_DATA: ComponentProps<typeof FoodContentCard.Thumbnail>[] = [
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  },
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  },
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  },
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  }
];

type Props = {
  /**Thumbnail 콘텐츠들 */
  contents: ComponentProps<typeof FoodContentCard.Thumbnail>[];
};

const FoodContentCardStory = {
  title: 'Component/Banner Carousel',
  component: BannerCarousel
};
export default FoodContentCardStory;

const CardTemplate: StoryFn<Props> = (props) => <BannerCarousel {...props} />;

/**
 * 메인 배너에 보여지는 썸네일 입니다.
 */
export const Default = CardTemplate.bind({});

Default.args = {
  contents: SAMPLE_BANNER_DATA
};
