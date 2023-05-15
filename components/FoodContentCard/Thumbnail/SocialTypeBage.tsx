import React, { FC } from 'react';
import YoutubeIcon from '@/public/svg/youtube_logo.svg';
import NaverBlogIcon from '@/public/svg/naver_blog_logo.svg';
import styled from '@emotion/styled';
import { SocialBadge } from '@/types/foodContentCard';

export const BadgeLayout = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

type Props = {
  types?: SocialBadge;
};

const badgeMap = {
  youtube: <YoutubeIcon />,
  naverBlog: <NaverBlogIcon />
};

const SocialTypeBadge: FC<Props> = ({ types }) => {
  if (types !== undefined) {
    return <BadgeLayout>{badgeMap[types]}</BadgeLayout>;
  } else return <></>;
};

export default SocialTypeBadge;
