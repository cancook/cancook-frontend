import styled from '@emotion/styled';
import React, { useRef } from 'react';
import CardCarousel from './CardCarousel';

import ArrowRight from '@/public/svg/arrow-right.svg';
import ArrowLeft from '@/public/svg/arrow-left.svg';
import { YoutubeCategory } from '@/types/youtube';
import { useScreenType } from '@/hook/useScreen';
export type CardCarouselContainerProps = {
  /**
   * 카드에 들어가는 컨텐츠
   */
  contents: YoutubeCategory;
};

const CardCarouselContainer = ({ contents }: CardCarouselContainerProps) => {
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);

  const screenType = useScreenType();
  // NOTE: 반응형으로 카드의 수가 달라짐
  const slidesPerView =
    screenType === 'phone' ? 1.5 : screenType === 'tablet' ? 3 : 4;
  const slidesPerGroup =
    screenType === 'phone' ? 1 : screenType === 'tablet' ? 3 : 4;

  return (
    <CarouselContainer>
      <TitleWrapper>
        <CategoryTitle>{contents.title}</CategoryTitle>
        <SwiperButtonWrapper>
          <ArrowButton ref={prevButtonRef}>
            <ArrowLeft />
          </ArrowButton>
          <ArrowButton ref={nextButtonRef}>
            <ArrowRight />
          </ArrowButton>
        </SwiperButtonWrapper>
      </TitleWrapper>
      <CardCarousel
        cards={contents.data}
        prev={prevButtonRef}
        next={nextButtonRef}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      />
    </CarouselContainer>
  );
};

export default CardCarouselContainer;

const CarouselContainer = styled.div`
  max-width: 80rem;
  margin: auto;

  width: 100%;
  padding: 0 1.25rem;

  ${({ theme }) => theme.screen.desktop} {
    width: auto;
  }
`;

const TitleWrapper = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const CategoryTitle = styled.h2`
  ${({ theme }) => theme.font.headLine.md};
  color: ${({ theme }) => theme.colors.white[0]};
`;
