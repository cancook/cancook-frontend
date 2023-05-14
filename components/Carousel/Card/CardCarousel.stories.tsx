import { StoryFn } from '@storybook/react';
import CardCarouselContainer from './CardCarouselContainer';
import { CardProps } from './CardCarousel';
import { SAMPLE_CARD_DATA } from '@/constants';

type Props = {
  title: string;
  contents: CardProps[];
};

const FoodContentCardStory = {
  title: 'Component/Card Category',
  component: CardCarouselContainer
};
export default FoodContentCardStory;

const CardTemplate: StoryFn<Props> = (props) => (
  <CardCarouselContainer {...props} />
);

/**
 * 카테고리에 보여지는 Carousel 입니다.
 *
 * 한 개의 컨텐츠는 Card 로 나뉘어져 있으며, 여러개의 카드가 한개의 카테고리를 만듭니다.
 */
export const CardCategory = CardTemplate.bind({});

CardCategory.args = {
  title: '헬스 하는 사람들을 위한 음식',
  contents: SAMPLE_CARD_DATA
};
