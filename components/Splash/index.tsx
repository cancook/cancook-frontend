import styled from '@emotion/styled';
import React from 'react';

type CarouselTextItem = {
  img: string;
  name: string;
};

type CarouselTextList = CarouselTextItem[];

const TextCarousel = ({
  ingredientList
}: {
  ingredientList: CarouselTextList;
}) => {
  return (
    <TextCarouselContainer>
      <HeadTextCarouselList>
        {ingredientList.map((ingredient) => (
          <TextCarouselItem key={ingredient.name}>
            {ingredient.img}
            {ingredient.name}
          </TextCarouselItem>
        ))}
      </HeadTextCarouselList>
      <TailTextCarouselList>
        {ingredientList.map((ingredient) => (
          <TextCarouselItem key={ingredient.name}>
            {ingredient.img}
            {ingredient.name}
          </TextCarouselItem>
        ))}
      </TailTextCarouselList>
    </TextCarouselContainer>
  );
};

const Splash = () => {
  const ingredientList = [
    // TODO: change img to image src
    { img: '🥚', name: '달걀' },
    { img: '🐮', name: '소고기' },
    { img: '🥬', name: '양배추' },
    { img: '🦑', name: '오징어' }
    // { img: '🥛', name: '우유' },
    // { img: '🍚', name: '밥' },
    // { img: '🧅', name: '양파' },
    // { img: '🥓', name: '베이컨' },
    // { img: '🍤', name: '새우' },
    // { img: '🧄', name: '마늘' }
    // { img: '🍗', name: '닭고기' }
  ];

  return (
    <SplashContainer>
      <SplashHeader>
        오늘은 <TextCarousel ingredientList={ingredientList} />로
      </SplashHeader>
      <SplashHeader>어떤 요리를 만들어볼까?</SplashHeader>
    </SplashContainer>
  );
};

export default Splash;

const SplashContainer = styled.div`
  /* TODO: height 재설정 필요 100vh - header-height */
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SplashHeader = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  ${({ theme }) => theme.font.headLine.lg};
  color: #fff;
`;

// Text Carousel
const TextCarouselContainer = styled.div`
  position: relative;
  width: 6.75rem;
  height: 2.25rem;
  border-radius: 0.45rem;
  background: #232328;
  overflow: hidden;
`;

// count 는 list item 의 숫자입니다.
const TextCarouselList = styled.div`
  position: absolute;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0.55, 0.05, 0.55, 0.95);
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;

const HeadTextCarouselList = styled(TextCarouselList)`
  animation-name: headTextMove;

  @keyframes headTextMove {
    0% {
      top: 0;
    }
    25% {
      top: calc(1 * -2.25rem);
    }
    50% {
      top: calc(2 * -2.25rem);
    }
    75% {
      top: calc(3 * -2.25rem);
    }
    100% {
      top: calc(4 * -2.25rem);
    }
  }
`;

const TailTextCarouselList = styled(TextCarouselList)`
  animation-name: tailTextMove;
  top: calc(4 * 2.25rem);
  @keyframes tailTextMove {
    0% {
      top: calc(-4 * -2.25rem);
    }
    25% {
      top: calc(-3 * -2.25rem);
    }
    50% {
      top: calc(-2 * -2.25rem);
    }
    75% {
      top: calc(-1 * -2.25rem);
    }
    100% {
      top: calc(0 * -2.25rem);
    }
  }
`;

const TextCarouselItem = styled.div`
  text-align: center;
  color: #ffc043;
  font-family: Pretendard;
  font-size: 1.575rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.01688rem;
  padding: 0 0.375rem;
  line-height: 2.25rem;
`;
