import { BANNER_DUMMY_DATA } from '@/constants/dummyData/banner';
import {
  YOUTUBE_BANNER_DUMMY_DATA,
  YOUTUBE_CATEGORY_DUMMY_DATA
} from '@/constants/dummyData/youtube';
import { BannerInformation } from '@/types/banner';
import { YoutubeCategory, YoutubeRecommended } from '@/types/youtube';
import styled from '@emotion/styled';
import CardCarousel from '@/components/common/Carousel/CardCarouselContainer';
import Banner from '@/components/common/Banner/Banner';

const Category = () => {
  const bannerData: BannerInformation[] = BANNER_DUMMY_DATA;
  const recommendedData: YoutubeRecommended[] = YOUTUBE_BANNER_DUMMY_DATA;
  const categoryData: YoutubeCategory[] = YOUTUBE_CATEGORY_DUMMY_DATA;

  return (
    <MainContainer>
      <Banner banners={bannerData} isLoading={false} />
      {categoryData?.map((category) => (
        <CardCarousel key={`category-${category.title}`} contents={category} />
      ))}
    </MainContainer>
  );
};

export default Category;

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
