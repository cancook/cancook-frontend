import { StoryFn } from '@storybook/react';
import Category from '.';
import { CardProps } from './Card';
import { SAMPLE_CARD_DATA } from '@/constants';

type Props = {
  title: string;
  contents: CardProps[];
};

const FoodContentCardStory = {
  title: 'Component/Card Category',
  component: Category
};
export default FoodContentCardStory;

const CardTemplate: StoryFn<Props> = (props) => <Category {...props} />;

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
