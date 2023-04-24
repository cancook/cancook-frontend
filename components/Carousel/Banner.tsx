import React, { ComponentProps } from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';

type Props = {
  /**Thumbnail 콘텐츠들 */
  contents: ComponentProps<typeof FoodContentCard.Thumbnail>[];
};

const BannerCarousel = ({ contents }: Props) => {
  return (
    <div>
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides
        loop
      >
        {contents.map(
          (
            content: ComponentProps<typeof FoodContentCard.Thumbnail>,
            idx: number
          ) => (
            <SwiperSlide key={`content-${idx}`}>
              <ImageContainer>
                <FoodContentCard.Thumbnail {...content} />
              </ImageContainer>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 350px;
  border: 1px solid red;
`;
