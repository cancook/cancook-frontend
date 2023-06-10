import React from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import { YoutubeRecommended } from '@/types/youtube';

export type BannerCarouselProps = {
  /**Thumbnail 콘텐츠들 */
  contents: YoutubeRecommended[] | undefined;
  isLoading: boolean;
};

const BannerCarousel = ({ contents, isLoading }: BannerCarouselProps) => {
  return (
    <BannerContainer>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={true}
        navigation
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop
      >
        {contents?.map((content) => (
          <SwiperSlide
            key={`content-${content.id}`}
            style={{
              transform: 'none'
              // z-index를 사용하려면 기존에 있는 transform속성을 초기화 시켜야 사용할수 있음 동시에 사용하면 z-index가 무시됨
            }}
          >
            <ImageContainer
              onClick={() => window.open(content.link, '__blank')}
            >
              <FoodContentCard.Thumbnail
                time={content.playTime}
                src={content.thumbnailURL}
                size="lg"
              />
            </ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerContainer>
  );
};

export default BannerCarousel;

const BannerContainer = styled.div`
  min-width: 78.75rem;
  .swiper {
    overflow: visible;
    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.colors.white[50]};
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: visible;
  aspect-ratio: 16 / 9;
  width: 100%;
  transition: all 100ms linear;
  &:hover {
    scale: 1.2;
    box-shadow: 0 0 4rem 2rem rgba(0, 0, 0, 0.2);
    z-index: 50;
  }
`;
