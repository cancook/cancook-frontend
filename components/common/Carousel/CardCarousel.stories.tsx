import { StoryFn } from '@storybook/react';
import CardCarouselContainer, {
  CardCarouselContainerProps
} from './CardCarouselContainer';
import { YOUTUBE_CATEGORY_DUMMY_DATA } from '@/constants/dummyData/youtube';
import { MainContainer } from '@/pages';

const FoodContentCardStory = {
  title: 'Component/Card Category',
  component: CardCarouselContainer
};
export default FoodContentCardStory;

const CardTemplate: StoryFn<CardCarouselContainerProps> = (props) => (
  <MainContainer>
    <CardCarouselContainer {...props} />
  </MainContainer>
);

/**
 * 카테고리에 보여지는 Carousel 입니다.
 *
 * 한 개의 컨텐츠는 Card 로 나뉘어져 있으며, 여러개의 카드가 한개의 카테고리를 만듭니다.
 */
export const CardCategory = CardTemplate.bind({});

CardCategory.args = {
  contents: YOUTUBE_CATEGORY_DUMMY_DATA[0]
};
