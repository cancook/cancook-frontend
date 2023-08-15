import Head from 'next/head';
import styled from '@emotion/styled';

import { useQuery } from '@tanstack/react-query';
import Splash from '@/components/Main/Splash';
import { getCategoryList } from '@/apis/youtube/getCategoryList';
import Category from '@/components/Main/Category';
import { BANNER_DUMMY_DATA } from '@/constants/dummyData/banner';
import { BannerInformation } from '@/types/banner';
import Banner from '@/components/common/Banner/Banner';
import { useRef } from 'react';

export default function Home() {
  const { data: categoryData, isLoading: isCategoryLoading } = useQuery(
    ['youtube', 'category'],
    getCategoryList
  );

  const bannerData: BannerInformation[] = BANNER_DUMMY_DATA;

  const categoryRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash scrollTargetRef={categoryRef} />
      <CategoryContainer ref={categoryRef}>
        <Banner banners={bannerData} isLoading={false} />
        {categoryData && <Category data={categoryData} />}
      </CategoryContainer>
    </>
  );
}

const CategoryContainer = styled.section`
  /* Scroll to 버튼을 덮어쓰기 */
  position: relative;
  z-index: 1;

  background-color: black;
  scroll-snap-align: start;

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

// export const getServerSideProps: GetServerSideProps<{
//   ingredients: string[];
//   videos: Video[];
// }> = async ({ query }) => {
//   const videos = await getYoutubeFromIngredient(ingredients.split(','));

//   return {
//     props: {

//     }
//   };
// };

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
