import React from 'react';

import FoodContentCard from '@/components/FoodContentCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';

const BannerCarousel = () => {
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
        <SwiperSlide>
          <ImageContainer>Image Goes Here</ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>Image Goes Here</ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <FoodContentCard.Thumbnail
              isPlayButton
              time={'8:00'}
              src={
                'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ'
              }
              size={'lg'}
              socialBadge={'youtube'}
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <FoodContentCard.Thumbnail
              isPlayButton
              time={'8:00'}
              src={
                'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ'
              }
              size={'lg'}
              socialBadge={'youtube'}
            />
          </ImageContainer>
        </SwiperSlide>
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
