import Image from 'next/image';
import React, { FC } from 'react';
import youtubeLogo from '@/assets/png/youtube_logo.png';
import naverBlogLogo from '@/assets/png/naver_blog_logo.png';
import styled from '@emotion/styled';

export const SocialTypeBadgeLayout = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

type Props = {
  types?: 'youtube' | 'naverBlog';
};

const badgeMap = {
  youtube: youtubeLogo,
  naverBlog: naverBlogLogo
};

const SocialTypeBadge: FC<Props> = ({ types }) => {
  if (types !== undefined) {
    return (
      <SocialTypeBadgeLayout>
        <Image src={badgeMap[types]} alt={types} />
      </SocialTypeBadgeLayout>
    );
  } else return <></>;
};

export default SocialTypeBadge;
