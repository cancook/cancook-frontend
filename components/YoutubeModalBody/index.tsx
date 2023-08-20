import styled from '@emotion/styled';
import React from 'react';
import useScreen from '@/hook/useScreen';
import YouTube from 'react-youtube';
import ArrowMediumIcon from '@/public/svg/arrow-medium.svg';
import ShareIcon from '@/public/svg/share.svg';
import PhoneScreen from './PhoneScreen';
import DesktopScreen from './DesktopScreen';
import useYoutubeDetail from '@/hook/useYoutubeDetail';
import dayjs from 'dayjs';
import { closeModal } from '@/provider/ModalState';
import { useRouter } from 'next/router';

type YoutubeModalBodyProps = {
  id: string;
  haveIngredients?: string[];
};

const YoutubeModalBody = ({ id, haveIngredients }: YoutubeModalBodyProps) => {
  const screenSize = useScreen();
  const { data } = useYoutubeDetail(id);
  const router = useRouter();
  if (!data) return <></>;
  return (
    <>
      {screenSize == 'phone' && (
        <Header>
          <ArrowMediumIcon
            onClick={() => {
              closeModal();
            }}
          />
          <ShareIcon />
        </Header>
      )}
      <YouTubeVideo
        videoId={data.urlPk}
        opts={{
          width: '100wh',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Body>
        <Title>
          <h1>{data.title}</h1>
          <h6>조회수 {data.views.toLocaleString()}회</h6>
          <h6>{dayjs(data.createdAt).format('YYYY년 MM월 DD일')}</h6>
        </Title>
        {screenSize === 'phone' ? (
          <PhoneScreen
            haveIngredients={haveIngredients ?? []}
            description={data.description}
            ingredients={data.ingredients}
          />
        ) : (
          <DesktopScreen
            haveIngredients={haveIngredients ?? []}
            description={data.description}
            ingredients={data.ingredients}
          />
        )}
      </Body>
    </>
  );
};

const Header = styled.header`
  padding: 0.625rem 1.25rem;
  display: flex;
  justify-content: space-between;
`;

const YouTubeVideo = styled(YouTube)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  ${({ theme }) => theme.screen.tablet} {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Body = styled.section`
  width: 100%;
  padding: 0.75rem 1.25rem;
  color: ${({ theme }) => theme.colors.white[0]};
  max-height: calc(
    100vh - 2.5rem - (100vw * 0.5625)
  ); // 전체 크기 - header크기 - 동영상 크기 (16:9)사이즈 계산
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${({ theme }) => theme.screen.tablet} {
    padding: 2.125rem;
    max-height: calc(
      100vh - 1.5rem - (50rem * 0.5625)
    ); // 100vh에서 modal 공백(2rem) 제외후 동영상 크기(800px의 16:9) 만큼 빼기
    // TODO: 문제점) 800~768px 사이에서는 약간의 공백이 생겨버림
  }
`;

const Title = styled.div`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.screen.tablet} {
    margin-bottom: 0.75rem;
  }

  > h1 {
    ${({ theme }) => theme.font.label.lg};

    ${({ theme }) => theme.screen.tablet} {
      ${({ theme }) => theme.font.title.lg};
      line-height: 2.125rem;
    }
  }

  > h6 {
    ${({ theme }) => theme.font.body.sm};
    color: ${({ theme }) => theme.colors.gray[100]};
    display: inline-block;

    &:first-of-type::after {
      content: '|';
      margin: 0 0.5rem;
      color: ${({ theme }) => theme.colors.gray[600]};
    }

    ${({ theme }) => theme.screen.tablet} {
      ${({ theme }) => theme.font.body.md};
    }
  }
`;

export default YoutubeModalBody;
