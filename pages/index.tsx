import Head from 'next/head';
import styled from '@emotion/styled';

import { YoutubeRecommended } from '@/types/youtube';
import { YOUTUBE_BANNER_DUMMY_DATA } from '@/constants/dummyData/youtube';
import { BannerInformation } from '@/types/banner';
import { BANNER_DUMMY_DATA } from '@/constants/dummyData/banner';
import { useQuery } from '@tanstack/react-query';
import Splash from '@/components/Main/Splash';
import { getCategoryList } from '@/apis/youtube/getCategoryList';

export default function Home() {
  // const { data: recommendedData, isLoading: isRecommendedLoading } = useQuery(
  //   ['youtube', 'recommended'],
  //   getRecommendedList
  // );
  const { data: categoryData, isLoading: isCategoryLoading } = useQuery(
    ['youtube', 'category'],
    getCategoryList
  );

  // TODO: 테스트용
  const bannerData: BannerInformation[] = BANNER_DUMMY_DATA;
  const recommendedData: YoutubeRecommended[] = YOUTUBE_BANNER_DUMMY_DATA;
  // const categoryData: YoutubeCategory[] = YOUTUBE_CATEGORY_DUMMY_DATA;

  return (
    <>
      <Head>
        <title>모먹지 · 오늘은 어떤 요리를 만들어 볼까?</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NOTE: 07-18 update
                메인 페이지 진입시 처음 보이는 것은 검색창이며,
                아래의 MainContainer 는 검색이 종료 된뒤 결과 페이지와 흡사합니다. */}

      {/* <MainContainer>
        <Banner banners={bannerData} isLoading={false} />
        {categoryData?.map((category) => (
          <CardCarousel
            key={`category-${category.title}`}
            contents={category}
          />
        ))}
      </MainContainer> */}
      <Splash />
      {/* <Test /> */}
    </>
  );
}

export const MainContainer = styled.div`
  padding: 0;
  padding-bottom: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;

  ${({ theme }) => theme.screen.desktop} {
    gap: 1.5rem;
  }
`;
