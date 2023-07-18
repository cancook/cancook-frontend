import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const ScrollToCategory = () => {
  return (
    <ScrollToCategoryContainer>
      <ScrollToText>스크롤 해보세요!</ScrollToText>
      <SpringImage>
        <Image
          src={'/asset/splash/icArrowSpin.png'}
          alt="arrow-spin"
          fill
          style={{ objectFit: 'contain' }}
        />
      </SpringImage>
    </ScrollToCategoryContainer>
  );
};

export default ScrollToCategory;

const ScrollToCategoryContainer = styled.div`
  position: absolute;
  bottom: 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  ${({ theme }) => theme.screen.desktop} {
    bottom: 1.5rem;
  }
`;

const ScrollToText = styled.span`
  color: ${({ theme }) => theme.colors.gray[300]};
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.body.md}
  }
`;

const SpringImage = styled.div`
  position: relative;
  width: 1.625rem;
  height: 1.625rem;

  ${({ theme }) => theme.screen.desktop} {
    width: 2rem;
    height: 2rem;
  }
`;
