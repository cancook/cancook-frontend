import { ComponentProps } from 'react';
import FoodContentCard from '.';
import { StoryFn } from '@storybook/react';
import CreatorProfile from './Footer/CreatorProfile';

const FoodContentCardStory = {
  title: 'Component/FoodContentCard',
  component: FoodContentCard,
  tags: ['autodocs']
};
export default FoodContentCardStory;

type ThumbnailProps = ComponentProps<typeof FoodContentCard.Thumbnail>;
type BodyProps = ComponentProps<typeof FoodContentCard.Body>;
type Props = {
  'FoodContentCard.Thumbnail': ThumbnailProps;
  'FoodContentCard.Body': BodyProps;
};

const CardTemplate: StoryFn<Props> = (args) => (
  <FoodContentCard.Layout>
    <FoodContentCard.Thumbnail {...args['FoodContentCard.Thumbnail']} />
    <FoodContentCard.Body {...args['FoodContentCard.Body']} />
    <CreatorProfile src="https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A">
      김코딩
    </CreatorProfile>
  </FoodContentCard.Layout>
);

const BigCarouselTemplate: StoryFn<Props> = (args) => (
  <FoodContentCard.Layout>
    <FoodContentCard.Thumbnail {...args['FoodContentCard.Thumbnail']} />
  </FoodContentCard.Layout>
);

export const YoutubeVideoInCarousel = BigCarouselTemplate.bind({});

YoutubeVideoInCarousel.args = {
  'FoodContentCard.Thumbnail': {
    isPlayButton: true,
    time: '8:00',
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    socialBadges: 'youtube',
    size: 'lg'
  }
};

export const NaverVideoInCarousel = BigCarouselTemplate.bind({});

NaverVideoInCarousel.args = {
  'FoodContentCard.Thumbnail': {
    src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
    socialBadges: 'naverBlog',
    size: 'lg'
  }
};

export const FullFoodContentCard = CardTemplate.bind({});

FullFoodContentCard.args = {
  'FoodContentCard.Thumbnail': {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
    size: 'md',
    time: '8:00'
  },
  'FoodContentCard.Body': {
    title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
    subTitle: '조회수 26만회 • 7일전'
  }
};
