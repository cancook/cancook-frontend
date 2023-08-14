import React, { useState } from 'react';
import { Video } from '@/types/youtube';
import FoodContentCard from '@/components/FoodContentCard';
import styled from '@emotion/styled';
import { getYoutubeFromIngredient } from '@/apis/search/getYoutubeFromIngredient';
import Chip from '@/components/common/Chip';
import ArrowUpIcon from '@/public/svg/arrow-up.svg';
import Autocomplete from '@/components/Search/SearchInput/Autocomplete';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const ResultPage = ({
  ingredients,
  videos
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //   Filter
  const [filterOption, setFilterOption] = useState<
    '최신순' | '인기순' | '조회순'
  >('최신순');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleModalOpenForSmileyHaemin = () => {
    // 여따가 넣으면돼 해민아~~~
  };

  return (
    <ResultPageContainer>
      <TitleWrapper>
        <ContentTitle>
          <CategoryTitle>&apos;{ingredients}&apos; 레시피</CategoryTitle>
          <Chip count={videos.length} />
        </ContentTitle>
        <OptionWrapper>
          <FilterOption
            onClick={() => {
              setIsFilterOpen((prev) => !prev);
            }}
          >
            <ArrowIcon isOpen={isFilterOpen} />
            <FilterSpan>{filterOption}</FilterSpan>
          </FilterOption>
          <Autocomplete
            keywords={['최신순', '인기순', '조회순']}
            isOpen={isFilterOpen}
            onItemClick={(item) => {
              setFilterOption(item as '최신순' | '인기순' | '조회순');
              setIsFilterOpen(false);
            }}
          />
        </OptionWrapper>
      </TitleWrapper>
      <VideoContainer>
        {videos
          .sort((video1, video2) => {
            // TODO: 클릭수를 기반으로 인기순을 파악하긴 해야함...
            if (filterOption === '인기순' || filterOption === '조회순')
              return video1.views - video2.views;
            else return +video1.id - +video2.id;
          })
          .map((resultVideo: Video) => (
            <FoodContentCard.Layout key={resultVideo.id}>
              <div onClick={handleModalOpenForSmileyHaemin}>
                <ImageWrapper>
                  <ImageScaleUp>
                    <FoodContentCard.Thumbnail
                      src={resultVideo.thumbnailURL}
                      size="md"
                    />
                  </ImageScaleUp>
                </ImageWrapper>
                <FoodContentCard.Body title={resultVideo.title} />
              </div>
              {/* <FoodContentCard.Footer
            // src={card.creator.thumbnail}
            viewAndDates={`조회수 ${viewsFormatter(
              resultVideo.views
            )}회 • ${timeFormatter(resultVideo.createdAt)}전`}
          >
            {card.creator.name}
          </FoodContentCard.Footer> */}
            </FoodContentCard.Layout>
          ))}
      </VideoContainer>
    </ResultPageContainer>
  );
};

export const getServerSideProps: GetServerSideProps<{
  ingredients: string[];
  videos: Video[];
}> = async ({ query }) => {
  const ingredients = query.ingredients as string;
  console.log('query', ingredients);
  const videos = await getYoutubeFromIngredient(ingredients.split(','));

  return {
    props: {
      ingredients: ingredients.split(','),
      videos: videos.filter((item) => item.thumbnailURL.startsWith('https://'))
    }
  };
};

export default ResultPage;

const ResultPageContainer = styled.div`
  max-width: 80rem;
  margin: auto;

  width: 100%;
  padding: 0;

  ${({ theme }) => theme.screen.desktop} {
    padding: 0 1.25rem;
    width: auto;
    .swiper-wrapper {
      margin-left: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const ImageScaleUp = styled.div`
  transform: scale(1);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const TitleWrapper = styled.div`
  padding: 1.5rem 1.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.screen.desktop} {
    padding: 3rem 0 2rem;
  }
`;

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.88rem;
  flex: 1;
`;

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.yellow[400]};
  ${({ theme }) => theme.font.title.sm};

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.headLine.md};
  }
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0 1.25rem;
  gap: 1.5rem;

  ${({ theme }) => theme.screen.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.screen.desktop} {
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }
`;

const OptionWrapper = styled.div`
  position: relative;
  width: 4.75rem;
`;

const FilterOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const FilterSpan = styled.span`
  ${({ theme }) => theme.font.body.md};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray[300]};
  align-self: flex-end;
`;

const ArrowIcon = styled(ArrowUpIcon)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.3s ease-in-out;
`;
