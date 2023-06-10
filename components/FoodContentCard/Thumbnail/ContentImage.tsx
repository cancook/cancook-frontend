import Image from 'next/image';
import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { FoodContentCardSize } from '@/types/foodContentCard';

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
    <ImageLayout size={size}>
      <Image
        src={src}
        alt="thumbnail"
        // width={sizeMap[size].width}
        // height={sizeMap[size].height}
        fill
        style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
      />
      {children}
    </ImageLayout>
  );
};

export default ContentImage;

const ImageLayout = styled.div<{ size: 'md' | 'lg' }>`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  width: 100%;
  // height: ${({ size }) => (size ? `${sizeMap[size].height}px` : '100%')};
  aspect-ratio: 16 / 9;
`;
