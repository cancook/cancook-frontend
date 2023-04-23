import Image from 'next/image';
import React, { FC } from 'react';
import youtubeLogo from '@/assets/png/youtube_logo.png';
import naverBlogLogo from '@/assets/png/naver_blog_logo.png';
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
  youtube: youtubeLogo,
  naverBlog: naverBlogLogo
};

const SocialTypeBadge: FC<Props> = ({ types }) => {
  if (types !== undefined) {
    return (
      <BadgeLayout>
        <Image src={badgeMap[types]} alt={types} />
      </BadgeLayout>
    );
  } else return <></>;
};

export default SocialTypeBadge;
