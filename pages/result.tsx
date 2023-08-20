import React, { useState } from 'react';
import { VideoResultInformation } from '@/types/youtube';
import FoodContentCard from '@/components/FoodContentCard';
import styled from '@emotion/styled';
import { getYoutubeFromIngredient } from '@/apis/search/getYoutubeFromIngredient';
import Chip from '@/components/common/Chip';
import ArrowUpIcon from '@/public/svg/arrow-up.svg';
import Autocomplete from '@/components/Search/SearchInput/Autocomplete';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import viewsFormatter from '@/utils/viewsFormatter';
import timeFormatter from '@/utils/timeFormatter';
import { showModal } from '@/provider/ModalState';
import YoutubeModalBody from '@/components/YoutubeModalBody';
import { useRouter } from 'next/router';

const ResultPage = ({
  ingredients,
  videoInformation
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //   Filter
  const [filterOption, setFilterOption] = useState<
    '최신순' | '인기순' | '조회순'
  >('최신순');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <ResultPageContainer>
      <TitleWrapper>
        <ContentTitle>
          <CategoryTitle>&apos;{ingredients}&apos; 레시피</CategoryTitle>
          <Chip count={videoInformation.length} />
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
        {videoInformation
          .sort((videoInfo1, videoInfo2) => {
            const video1 = videoInfo1.video;
            const video2 = videoInfo2.video;
            // TODO: 클릭수를 기반으로 인기순을 파악하긴 해야함...
            if (filterOption === '인기순' || filterOption === '조회순')
              return video1.views - video2.views;
            else return +video1.id - +video2.id;
          })
          .map((resultVideoInfo: VideoResultInformation) => {
            const video = resultVideoInfo.video;
            const creator = resultVideoInfo.creator;
            const ingredientCount: number =
              resultVideoInfo.ingredients &&
              resultVideoInfo.ingredients.length - ingredients.length;
            const handleModalClick = () => {
              showModal({
                fullScreen: true,
                show: true,
                body: <YoutubeModalBody id={video.id} />,
                onClose: () => {
                  router.push(router.asPath, router.asPath, {
                    shallow: true
                  });
                }
              });
              router.push(router.asPath, `/youtube/${video.id}`, {
                shallow: true
              });
            };
            return (
              <FoodContentCard.Layout key={video.id}>
                <div onClick={handleModalClick}>
                  <ImageWrapper>
                    <ImageScaleUp>
                      <FoodContentCard.Thumbnail
                        src={video.thumbnailURL}
                        size="md"
                      />
                    </ImageScaleUp>
                  </ImageWrapper>
                  <FoodContentCard.Body
                    title={video.title}
                    ingredientCount={ingredientCount}
                  />
                </div>
                <FoodContentCard.Footer
                  src={creator.thumbnail}
                  viewAndDates={`조회수 ${viewsFormatter(
                    video.views
                  )}회 • ${timeFormatter(video.createdAt)}전`}
                >
                  {creator.name}
                </FoodContentCard.Footer>
              </FoodContentCard.Layout>
            );
          })}
      </VideoContainer>
    </ResultPageContainer>
  );
};

export const getServerSideProps: GetServerSideProps<{
  ingredients: string[];
  videoInformation: VideoResultInformation[];
}> = async ({ query }) => {
  const ingredients = query.ingredients as string;
  const videoInformation = await getYoutubeFromIngredient(
    ingredients.split(',')
  );

  return {
    props: {
      ingredients: ingredients.split(','),
      videoInformation
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
    grid-template-columns: repeat(2, 1fr);
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
