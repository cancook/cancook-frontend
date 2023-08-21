import React from 'react';

import FoodContentCard from '@/components/FoodContentCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import { VideoInformation } from '@/types/youtube';
import timeFormatter from '@/utils/timeFormatter';
import viewsFormatter from '@/utils/viewsFormatter';
import styled from '@emotion/styled';
import YoutubeModalBody from '@/components/YoutubeModalBody';
import { showModal } from '@/provider/ModalState';
import { useRouter } from 'next/router';

type Props = {
  /** thumbnail과 body를 받아서 카드 리스트를 만들고, 그 리스트로 carousel을 만들 수 있게끔 하는 data */
  cards: VideoInformation[];

  /** Card carousel을 움직이는 왼쪽 버튼 */
  prev: React.RefObject<HTMLDivElement>;

  /** Card carousel을 움직이는 오른쪽 버튼 */
  next: React.RefObject<HTMLDivElement>;
};
const CardCarousel = ({ cards, prev, next }: Props) => {
  const router = useRouter();
  return (
    <>
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
        slidesPerView={1.5}
        slidesPerGroup={1}
        freeMode
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            freeMode: false
          }
        }}
        loop
      >
        {cards.map((card, idx) => {
          const handleModalClick = () => {
            showModal({
              fullScreen: true,
              show: true,
              body: <YoutubeModalBody id={card.video.id} />,
              onClose: () => {
                router.push(`/`, `/`, {
                  shallow: true
                });
              }
            });
            router.push(`/`, `/youtube/${card.video.id}`, {
              shallow: true
            });
          };
          return (
            <SwiperSlide key={`card-${card.video.id}`}>
              <FoodContentCard.Layout>
                <div onClick={handleModalClick}>
                  <ImageWrapper>
                    <ImageScaleUp>
                      <FoodContentCard.Thumbnail
                        src={card.video.thumbnailURL}
                        size="md"
                      />
                    </ImageScaleUp>
                  </ImageWrapper>
                  <FoodContentCard.Body title={card.video.title} />
                </div>
                <FoodContentCard.Footer
                  src={card.creator.thumbnail}
                  viewAndDates={`조회수 ${viewsFormatter(
                    card.video.views
                  )}회 • ${timeFormatter(card.video.createdAt)}전`}
                >
                  {card.creator.name}
                </FoodContentCard.Footer>
              </FoodContentCard.Layout>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CardCarousel;

const ImageWrapper = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ImageScaleUp = styled.div`
  transform: scale(1);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
