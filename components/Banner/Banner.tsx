import React from 'react';

import { BannerInformation } from '@/types/banner';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styled from '@emotion/styled';
import Image from 'next/image';
import useScreen from '@/hook/useScreen';

export type BannerProps = {
  banners: BannerInformation[];
  isLoading: boolean;
};

const Banner = ({ banners, isLoading }: BannerProps) => {
  const screenType = useScreen();

  return (
    <BannerContainer>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation={false}
        pagination={{ type: 'fraction' }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        breakpoints={{
          1440: {
            navigation: true
          }
        }}
        loop
      >
        {banners.map((banner: BannerInformation, idx: number) => (
          <SwiperSlide key={`banner-${idx}`}>
            <ImageContainer background={banner.background}>
              {screenType !== '' && (
                <Image
                  src={
                    screenType === 'desktop'
                      ? banner.img.default
                      : banner.img.phone
                  }
                  alt={banner.description}
                  fill
                  style={{
                    objectFit: screenType === 'desktop' ? 'contain' : 'cover'
                  }}
                />
              )}
            </ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;

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

    .swiper-pagination-fraction {
      width: auto;
      right: 1.5rem;
      left: auto;
      padding: 0 0.5rem;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 1.5rem;
      color: white;
      font-size: 0.875rem;
      .swiper-pagination-current,
      .swiper-pagination-total {
        line-height: 1.5rem;
      }
    }
  }
`;

const ImageContainer = styled.div<{ background: string }>`
  position: relative;
  overflow: visible;
  background-color: ${({ background }) => background};
  height: 160px;

  ${({ theme }) => theme.screen.tablet} {
    height: 340px;
  }
`;
