import { Meta, StoryFn } from '@storybook/react';
import FoodContentCard from '..';
import { ComponentProps } from 'react';
import {
  FoodContentCardSizeList,
  SocialBadgeList
} from '@/types/foodContentCard';

const FoodContentCardThumbnailComponent: Meta<
  typeof FoodContentCard.Thumbnail
> = {
  title: 'Component/FoodContentCard/Thumbnail',
  component: FoodContentCard.Thumbnail,
  tags: ['autodocs'],
  argTypes: {
    isPlayButton: { control: 'boolean' },
    time: { control: 'text' },
    src: { control: 'text' },
    size: {
      control: 'select',
      options: FoodContentCardSizeList
    },
    socialBadge: {
      control: 'select',
      options: SocialBadgeList,
      default: undefined
    }
  }
};

type ThumbnailProps = ComponentProps<typeof FoodContentCard.Thumbnail>;
const ThumbnailTemplate: StoryFn<ThumbnailProps> = (args) => (
  <FoodContentCard.Layout>
    <FoodContentCard.Thumbnail {...args} />
  </FoodContentCard.Layout>
);

/** 유튜브 썸네일 */
export const YoutubeThumbnailInCarousel = ThumbnailTemplate.bind({});
YoutubeThumbnailInCarousel.args = {
  isPlayButton: true,
  time: '8:00',
  src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
  size: 'md',
  socialBadge: 'youtube'
};

/** 네이버 블로그 썸네일 */
export const NaverVideoInCarousel = ThumbnailTemplate.bind({});
NaverVideoInCarousel.args = {
  src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
  socialBadge: 'naverBlog',
  size: 'md'
};

export default FoodContentCardThumbnailComponent;
