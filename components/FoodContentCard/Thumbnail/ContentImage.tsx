import Image from 'next/image';
import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { FoodContentCardSize } from '@/types/foodContentCard';

const ImageLayout = styled.div`
  display: inline-flex;
  position: relative;
  cursor: pointer;
`;

const sizeMap = {
  md: {
    width: 305,
    height: 170
  },
  lg: {
    width: 630,
    height: 354
  }
};

type Props = {
  children: ReactNode;
  src: string;
  size: FoodContentCardSize;
};

const ContentImage: FC<Props> = ({ src, size, children }) => {
  return (
    <ImageLayout>
      <Image
        src={src}
        alt="thumbnail"
        width={sizeMap[size].width}
        height={sizeMap[size].height}
      />
      {children}
    </ImageLayout>
  );
};

export default ContentImage;
