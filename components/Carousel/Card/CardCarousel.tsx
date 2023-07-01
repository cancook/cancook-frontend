import React from 'react';

import FoodContentCard from '@/components/FoodContentCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import CreatorProfile from '@/components/FoodContentCard/Footer/CreatorProfile';
import { VideoInformation } from '@/types/youtube';
import timeFormatter from '@/utils/timeFormatter';
import viewsFormatter from '@/utils/viewsFormatter';
import styled from '@emotion/styled';

type Props = {
  /** thumbnail과 body를 받아서 카드 리스트를 만들고, 그 리스트로 carousel을 만들 수 있게끔 하는 data */
  cards: VideoInformation[];

  /** Card carousel을 움직이는 왼쪽 버튼 */
  prev: React.RefObject<HTMLDivElement>;

  /** Card carousel을 움직이는 오른쪽 버튼 */
  next: React.RefObject<HTMLDivElement>;

  /** Carousel에 보여지는 카드 수 */
  slidesPerView?: number;

  /** Carousel에서 다음 버튼을 누르면 넘어가는 카드 수 */
  slidesPerGroup?: number;
};
const CardCarousel = ({
  cards,
  prev,
  next,
  slidesPerView = 4,
  slidesPerGroup = 4
}: Props) => {
  return (
    <Swiper
      navigation={{
        prevEl: prev.current,
        nextEl: next.current
      }}
      onBeforeInit={(swiper) => {
        if (
          swiper &&
          swiper.params.navigation &&
          typeof swiper.params.navigation !== 'boolean'
        ) {
          swiper.params.navigation.prevEl = prev.current;
          swiper.params.navigation.nextEl = next.current;
        }
      }}
      modules={[FreeMode, Navigation]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      freeMode
      loop
    >
      {cards.map((card, idx) => (
        <SwiperSlide key={`card-${card.video.id}`}>
          <FoodContentCard.Layout>
            <div onClick={() => window.open(card.video.link, '__blank')}>
              <ImageWrapper>
                <ImageScaleUp>
                  <FoodContentCard.Thumbnail
                    src={card.video.thumbnailURL}
                    size="md"
                  />
                </ImageScaleUp>
              </ImageWrapper>
              <FoodContentCard.Body
                title={card.video.title}
                subTitle={`조회수 ${viewsFormatter(
                  card.video.views
                )}회 • ${timeFormatter(card.video.createdAt)}전`}
              />
            </div>
            <CreatorProfile src={card.creator.thumbnail}>
              {card.creator.name}
            </CreatorProfile>
          </FoodContentCard.Layout>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const ImageScaleUp = styled.div`
  transform: scale(1);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
