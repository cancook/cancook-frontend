import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Video } from '@/types/youtube';
import FoodContentCard from '@/components/FoodContentCard';
import styled from '@emotion/styled';
import { getYoutubeFromIngredient } from '@/apis/search/getYoutubeFromIngredient';
import Chip from '@/components/common/Chip';

const ResultPage = () => {
  const router = useRouter();
  const ingredients = router.query.ingredients as string;
  const [resultData, setResultData] = useState<Video[]>([]);

  useEffect(() => {
    if (ingredients)
      getYoutubeFromIngredient(ingredients.split(',')).then((res) => {
        console.log('검색된 데이터', res);
        // TODO: thumbnailURL에 JSON 형식으로 오는 아이들을 쳐낸다.
        setResultData(
          res.filter((item) => item.thumbnailURL.startsWith('https://')) ?? []
        );
      });
  }, [ingredients]);

  const handleModalOpenForSmileyHaemin = () => {
    // 여따가 넣으면돼 해민아~~~
  };

  return (
    <ResultPageContainer>
      <TitleWrapper>
        <CategoryTitle>&apos;{ingredients}&apos; 레시피</CategoryTitle>
        <Chip count={resultData.length} />
      </TitleWrapper>
      <VideoContainer>
        {resultData.map((resultVideo: Video) => (
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

  gap: 0.88rem;

  ${({ theme }) => theme.screen.desktop} {
    padding: 3rem 0 2rem;
  }
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
