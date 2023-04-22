import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import CreatorProfile from './CreatorProfile';

const FoodContentCardCreatorProfile = {
  title: 'Component/FoodContentCard/CreatorProfile',
  component: CreatorProfile
};
export default FoodContentCardCreatorProfile;

type CreatorProfileProps = ComponentProps<typeof CreatorProfile>;
export const CreatorProfileTemplate: StoryFn<CreatorProfileProps> = (args) => (
  <CreatorProfile {...args} />
);
CreatorProfileTemplate.args = {
  src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
  children: '김코딩'
};
