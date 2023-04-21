import { FC } from 'react';
import ContentImage from './ContentImage';
import SocialTypeBadge from './SocialTypeBage';
import TimeStamp from './TimeStamp';
import VideoPlayButton from './VideoPlayButton';

type Props = {
  socialBadges?: 'youtube' | 'naverBlog';
  time?: string;
  isPlayButton?: boolean;
  src: string;
  size: 'md' | 'lg';
};

const FoodContentCardThumbnail: FC<Props> = ({
  socialBadges,
  time,
  isPlayButton = false,
  src,
  size
}) => {
  return (
    <ContentImage src={src} size={size}>
      {time && <TimeStamp time={time} size={size} />}
      {isPlayButton && <VideoPlayButton />}
      <SocialTypeBadge types={socialBadges} />
    </ContentImage>
  );
};

export default FoodContentCardThumbnail;
