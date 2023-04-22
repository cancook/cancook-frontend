import { ComponentProps } from 'react';
import FoodContentCard from '.';
import { StoryFn } from '@storybook/react';
import CreatorProfile from './Footer/CreatorProfile';

const FoodContentCardStory = {
  title: 'Component/FoodContentCard',
  component: FoodContentCard
};
export default FoodContentCardStory;

type ThumbnailProps = ComponentProps<typeof FoodContentCard.Thumbnail>;
type BodyProps = ComponentProps<typeof FoodContentCard.Body>;
type Props = {
  Thumbnail: ThumbnailProps;
  Body: BodyProps;
};

const CardTemplate: StoryFn<Props> = ({ Thumbnail, Body }) => (
  <FoodContentCard.Layout>
    <FoodContentCard.Thumbnail {...Thumbnail} />
    <FoodContentCard.Body {...Body} />
    <CreatorProfile src="https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A">
      김코딩
    </CreatorProfile>
  </FoodContentCard.Layout>
);

/**
 * FoodContentCard 컴포넌트를 전부 사용해서 구성했을때의 컴포넌트 예제 입니다.<br />
 * show code를 이용해 코드를 확인해보세요.
 */
export const FullFoodContentCard = CardTemplate.bind({});

FullFoodContentCard.args = {
  Thumbnail: {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
    size: 'md',
    time: '8:00'
  },
  Body: {
    title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
    subTitle: '조회수 26만회 • 7일전'
  }
};
