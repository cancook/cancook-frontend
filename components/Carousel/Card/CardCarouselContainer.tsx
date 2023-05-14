import styled from '@emotion/styled';
import React, { useRef } from 'react';
import CardCarousel, { CardProps } from './CardCarousel';

import ArrowRight from '@/assets/icons/arrow-right.svg';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
type Props = {
  /**
   * category의 이름
   */
  title: string;

  /**
   * 카드에 들어가는 컨텐츠
   */
  contents: CardProps[];
};

const CardCarouselContainer = ({ title, contents }: Props) => {
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);

  return (
    <CarouselContainer>
      <TitleWrapper>
        <CategoryTitle>{title}</CategoryTitle>
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
        cards={contents}
        prev={prevButtonRef}
        next={nextButtonRef}
      />
    </CarouselContainer>
  );
};

export default CardCarouselContainer;

const CarouselContainer = styled.div`
  max-width: 78.75rem;
  padding: 0 1rem;
  margin: auto;
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
