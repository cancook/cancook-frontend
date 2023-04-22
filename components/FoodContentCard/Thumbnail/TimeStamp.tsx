import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FoodContentCardSize } from '@/types/foodContentCard';

const layoutMap = {
  md: {
    right: '0.5rem',
    bottom: '0.5rem'
  },
  lg: {
    right: '1.8125rem',
    bottom: '1.1875rem'
  }
};

export const StampLayout = styled.div<Props>`
  position: absolute;
  ${({ size }) => {
    return `
      right: ${layoutMap[size].right};
      bottom: ${layoutMap[size].bottom};
    `;
  }}
`;

const sizeMap = {
  md: '1rem',
  lg: '1.125rem'
};

export const TimeStampBox = styled.div<Props>`
  display: flex;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  background-color: #000000cc;
  color: white;
  font-size: ${({ size }) => sizeMap[size]};
  font-weight: 700;
`;

type Props = {
  time?: string;
  size: FoodContentCardSize;
};

const TimeStamp: FC<Props> = ({ time, size }) => {
  return (
    <StampLayout size={size}>
      <TimeStampBox size={size}>{time}</TimeStampBox>
    </StampLayout>
  );
};

export default TimeStamp;
