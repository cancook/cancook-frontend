import styled from '@emotion/styled';
import React, { useRef } from 'react';
import CardCarousel from './CardCarousel';

import TriangleArrow from '@/public/svg/triangle-arrow.svg';
import { YoutubeCategory } from '@/types/youtube';
export type CardCarouselContainerProps = {
  /**
   * 카드에 들어가는 컨텐츠
   */
  contents: YoutubeCategory;
};

const CardCarouselContainer = ({ contents }: CardCarouselContainerProps) => {
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);

  return (
    <CarouselContainer>
      <TitleWrapper>
        <CategoryTitle>{contents.title}</CategoryTitle>
        <SwiperButtonWrapper>
          <ArrowButton ref={prevButtonRef}>
            <TriangleArrowLeft />
          </ArrowButton>
          <ArrowButton ref={nextButtonRef}>
            <TriangleArrowRight />
          </ArrowButton>
        </SwiperButtonWrapper>
      </TitleWrapper>
      <CardCarousel
        cards={contents.data}
        prev={prevButtonRef}
        next={nextButtonRef}
      />
    </CarouselContainer>
  );
};

export default CardCarouselContainer;

const CarouselContainer = styled.div`
  max-width: 80rem;
  margin: auto;

  width: 100%;
  padding: 0;

  /* 시작은 1.25rem 간격이 있는 상태에서 시작해야한다... */
  .swiper-wrapper {
    margin-left: 1.25rem;
  }

  ${({ theme }) => theme.screen.desktop} {
    padding: 0 1.25rem;
    width: auto;
    .swiper-wrapper {
      margin-left: 0;
    }
  }
`;

const TitleWrapper = styled.div`
  padding: 1.5rem 1.25rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.screen.desktop} {
    padding: 2rem 0;
  }
`;

const ArrowButton = styled.div`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;

  path {
    transition: all 0.25s linear;
  }
  &:hover path {
    fill: ${({ theme }) => theme.colors.orange['300']};
  }
`;

const SwiperButtonWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.screen.desktop} {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`;

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white[0]};
  ${({ theme }) => theme.font.title.sm};

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.headLine.md};
  }
`;

const TriangleArrowLeft = styled(TriangleArrow)``;

const TriangleArrowRight = styled(TriangleArrow)`
  transform: scaleX(-1);
`;
