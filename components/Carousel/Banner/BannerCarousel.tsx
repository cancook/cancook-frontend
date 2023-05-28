import React, { ComponentProps } from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';

type Props = {
  /**Thumbnail 콘텐츠들 */
  contents: ComponentProps<typeof FoodContentCard.Thumbnail>[];
};

const BannerCarousel = ({ contents }: Props) => {
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
        {contents.map(
          (
            content: ComponentProps<typeof FoodContentCard.Thumbnail>,
            idx: number
          ) => (
            <SwiperSlide
              key={`content-${idx}`}
              style={{
                transform: 'none'
              }}
            >
              <ImageContainer>
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
