import React, { ComponentProps } from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import CreatorProfile from '@/components/FoodContentCard/Footer/CreatorProfile';

export type CardProps = {
  thumbnail: ComponentProps<typeof FoodContentCard.Thumbnail>;
  body: ComponentProps<typeof FoodContentCard.Body>;
};

type Props = {
  /** thumbnail과 body를 받아서 카드 리스트를 만들고, 그 리스트로 carousel을 만들 수 있게끔 하는 data */
  cards: CardProps[];
};

const CardCarousel = ({ cards }: Props) => {
  return (
    <div>
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={6}
        centeredSlides
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
    </div>
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
