import ContentImage from './ContentImage';
import SocialTypeBadge from './SocialTypeBage';
import TimeStamp from './TimeStamp';
import VideoPlayButton from './VideoPlayButton';
import { FoodContentCardSize, SocialBadge } from '@/types/foodContentCard';

type Props = {
  /**
   * 게시글의 소셜 타입을 나타냅니다.
   */
  socialBadge?: SocialBadge;
  /**
   * 재생 시간을 나타냅니다.<br />
   * 00:00의 형식으로 입력합니다.
   */
  time?: string;
  /**
   * 재생 버튼의 게시 여부를 나타냅니다.
   */
  isPlayButton?: boolean;
  /**
   * 썸네일 이미지 경로를 나타냅니다.
   */
  src: string;
  /**
   * 썸네일의 사이즈를 결정합니다.
   */
  size: FoodContentCardSize;
};

/**
 * 게시글의 섬네일 UI 컴포넌트입니다.
 */
const FoodContentCardThumbnail = ({
  socialBadge,
  time,
  isPlayButton = false,
  src,
  size
}: Props) => {
  return (
    <ContentImage src={src} size={size}>
      {time && <TimeStamp time={time} size={size} />}
      {isPlayButton && <VideoPlayButton />}
      <SocialTypeBadge types={socialBadge} />
    </ContentImage>
  );
};

export default FoodContentCardThumbnail;
