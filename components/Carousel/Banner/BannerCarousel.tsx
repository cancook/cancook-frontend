import React from 'react';

import { Banner } from '@/types/banner';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import Image from 'next/image';
import useScreen from '@/hook/useScreen';

export type BannerCarouselProps = {
  banners: Banner[];
  isLoading: boolean;
};

const BannerCarousel = ({ banners, isLoading }: BannerCarouselProps) => {
  const isDesktop = useScreen('desktop');

  return (
    <BannerContainer>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop
      >
        {banners.map((banner: Banner, idx: number) => (
          <SwiperSlide key={`banner-${idx}`}>
            <ImageContainer background={banner.background}>
              <Image
                src={isDesktop ? banner.img.default : banner.img.phone}
                alt={banner.description}
                fill
                style={{ objectFit: 'cover' }}
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
  .swiper {
    overflow: visible;
    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.colors.white[50]};
      &::after {
        font-size: 2rem;
      }
    }
  }
`;

const ImageContainer = styled.div<{ background: string }>`
  position: relative;
  overflow: visible;
  background-color: ${({ background }) => background};

  height: 160px;

  transition: all 100ms linear;

  ${({ theme }) => theme.screen.m} {
    height: 340px;
  }
`;
