import styled from '@emotion/styled';
import React from 'react';
import useScreen from '@/hook/useScreen';
import YouTube from 'react-youtube';
import ArrowMediumIcon from '@/public/svg/arrow-medium.svg';
import ShareIcon from '@/public/svg/share.svg';
import PhoneScreen from './PhoneScreen';
import DesktopScreen from './DesktopScreen';

const YoutubeModalBody = () => {
  const screenSize = useScreen();
  return (
    <>
      {screenSize == 'phone' && (
        <Header>
          <ArrowMediumIcon />
          <ShareIcon />
        </Header>
      )}
      <YouTubeVideo
        videoId="uSpZpduIFnA"
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
          <h1>
            계란 2개로 폭신폭신 부드러운 수플레 팬케이크 만들기 🥞 | Souffle
            Pancake
          </h1>
          <h6>조회수 8,435회</h6>
          <h6>2023년 6월 3일</h6>
        </Title>
        {screenSize === 'phone' ? <PhoneScreen /> : <DesktopScreen />}
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
