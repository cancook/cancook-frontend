import React, { ComponentProps } from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
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
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides
        autoplay={{ delay: 3000 }}
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

      .banner-carousel-image-container:hover {
        scale: 1.2;
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 21.625rem;
`;
