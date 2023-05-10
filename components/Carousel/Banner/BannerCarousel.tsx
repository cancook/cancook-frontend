import React, { ComponentProps } from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';

type Props = {
  /**Thumbnail 콘텐츠들 */
  contents: ComponentProps<typeof FoodContentCard.Thumbnail>[];
};

const BannerCarousel = ({ contents }: Props) => {
  SwiperCore.use([Autoplay]);

  return (
    <BannerContainer>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides
        navigation
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop
      >
        {contents.map(
          (
            content: ComponentProps<typeof FoodContentCard.Thumbnail>,
            idx: number
          ) => (
            <SwiperSlide key={`content-${idx}`}>
              <ImageContainer className="banner-carousel-image-container">
                <FoodContentCard.Thumbnail {...content} />
              </ImageContainer>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </BannerContainer>
  );
};

export default BannerCarousel;

const BannerContainer = styled.div`
  .swiper {
    display: flex;
    align-items: center;

    height: 25.95rem;
    .swiper-wrapper {
      height: auto;
    }
    .swiper-slide-active {
      z-index: 999;

      .banner-carousel-image-container {
        transition: scale 100ms linear;

        &:hover {
          scale: 1.2;
        }
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.colors.white[50]};
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 21.625rem;
`;
