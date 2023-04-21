import { FC } from 'react';
import ContentImage from './ContentImage';
import SocialTypeBadge from './SocialTypeBage';
import TimeStamp from './TimeStamp';
import VideoPlayButton from './VideoPlayButton';
import { FoodContentCardSize, SocialBadge } from '@/types/foodContentCard';

type Props = {
  socialBadge?: SocialBadge;
  time?: string;
  isPlayButton?: boolean;
  src: string;
  size: FoodContentCardSize;
};

const FoodContentCardThumbnail: FC<Props> = ({
  socialBadge,
  time,
  isPlayButton = false,
  src,
  size
}) => {
  return (
    <ContentImage src={src} size={size}>
      {time && <TimeStamp time={time} size={size} />}
      {isPlayButton && <VideoPlayButton />}
      <SocialTypeBadge types={socialBadge} />
    </ContentImage>
  );
};

export default FoodContentCardThumbnail;
