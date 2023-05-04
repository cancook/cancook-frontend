import React, { ComponentProps } from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import CreatorProfile from '@/components/FoodContentCard/Footer/CreatorProfile';
import { NavigationOptions } from 'swiper/types';

export type CardProps = {
  thumbnail: ComponentProps<typeof FoodContentCard.Thumbnail>;
  body: ComponentProps<typeof FoodContentCard.Body>;
};

type Props = {
  /** thumbnail과 body를 받아서 카드 리스트를 만들고, 그 리스트로 carousel을 만들 수 있게끔 하는 data */
  cards: CardProps[];

  /** Card carousel을 움직이는 왼쪽 버튼 */
  prev: React.RefObject<HTMLDivElement>;
  /** Card carousel을 움직이는 오른쪽 버튼 */

  next: React.RefObject<HTMLDivElement>;
};
const CardCarousel = ({ cards, prev, next }: Props) => {
  return (
    <Swiper
      navigation={{
        prevEl: prev.current,
        nextEl: next.current
      }}
      onBeforeInit={(swiper) => {
        if (swiper && swiper.params.navigation) {
          (swiper.params.navigation as NavigationOptions).prevEl = prev.current;
          (swiper.params.navigation as NavigationOptions).nextEl = next.current;
        }
      }}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      slidesPerGroup={4}
      loop
    >
      {cards.map((card: CardProps, idx: number) => (
        <SwiperSlide key={`card-${idx}`}>
          <CardContainer>
            <FoodContentCard.Layout>
              <FoodContentCard.Thumbnail {...card.thumbnail} />
              <FoodContentCard.Body {...card.body} />
              <CreatorProfile src="https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A">
                김코딩
              </CreatorProfile>
            </FoodContentCard.Layout>
          </CardContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 18rem;
  border: 1px solid red;
`;
