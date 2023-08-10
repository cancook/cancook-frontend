import styled from '@emotion/styled';
import React from 'react';
import YouTube from 'react-youtube';
import Collapse from './Collapse';
import useScreen from '@/hook/useScreen';
import Accordion from '../common/Accordion';
import CheckItem from '../common/CheckItem';
import IngredientsTitle from './IngredientsTitle';

// type YoutubeModalBodyProps = {
//   isShow: boolean;
// };

const YouTubeVideo = styled(YouTube)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const YoutubeModalBody = () => {
  const screenSize = useScreen();
  return (
    <Container>
      <YouTubeVideo
        videoId="uSpZpduIFnA"
        opts={{
          width: '100wh',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        // onReady={(e) => {
        //   const { width, height } = e.target.getSize();
        //   console.log(width, height);
        //   e.target.setSize(width, width * (9 / 16));
        // }}
        // className={{
        //   position: 'relative',
        //   width: '100%',
        //   height: 0,
        //   paddingBottom: '56.25%',
        //   overflow: 'hidde',
        //   marginBottom: '50px'
        // }}
        // style={{
        //   position: 'relative',
        //   width: '100%',
        //   height: 0,
        //   paddingBottom: '56.25%',
        //   overflow: 'hidden',
        //   borderTopLeftRadius: '1rem',
        //   borderTopRightRadius: '1rem'
        // }}
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
        {screenSize !== 'phone' ? (
          <>
            <Collapse>
              {`계란 2개로 만드는 수플레 팬케이크 🥞 | Souffle Pancake \n 우선 단단한 머랭을 만들어주세요. \n 바닥이 두꺼운 프라이팬에 반죽이 서로 붙지
                않도록 자리를 잘 잡아주고수플레 팬케이크는 단단한 머랭과 불 조절이
                제일 중요한 것 같아요 \n 강불이면 쉽게 타버리고, 불이 약하면 옆으로
                퍼지고 쉽게 주저앉아요 😩 \n 나한테 맞는 불 조절을 찾으셔야 하지만
                어렵지 않아요 \n 약불에서 10분이면 폭신하고 부드러운 수플레 팬케이크,
                누구나 만`}
            </Collapse>
            <Box>
              <IngredientsTitle />
              <CheckItem isChecked={false}>애호박 1개</CheckItem>
              <CheckItem isChecked={false}>계란 2개</CheckItem>
              <CheckItem isChecked={false}>밀가루 1컵</CheckItem>
              <CheckItem isChecked={true}>우유 1/2컵</CheckItem>
              <CheckItem isChecked={false}>베이킹파우더 1/2작은술</CheckItem>
              <CheckItem isChecked={false}>소금 1/4작은술</CheckItem>
              <CheckItem isChecked={false}>설탕 1/4컵</CheckItem>
              <CheckItem isChecked={false}>바닐라 1작은술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
            </Box>
          </>
        ) : (
          <PhoneLayout>
            <Accordion title="더보기">
              {`계란 2개로 만드는 수플레 팬케이크 🥞 | Souffle Pancake \n 우선 단단한 머랭을 만들어주세요. \n 바닥이 두꺼운 프라이팬에 반죽이 서로 붙지
                않도록 자리를 잘 잡아주고수플레 팬케이크는 단단한 머랭과 불 조절이
                제일 중요한 것 같아요 \n 강불이면 쉽게 타버리고, 불이 약하면 옆으로
                퍼지고 쉽게 주저앉아요 😩 \n 나한테 맞는 불 조절을 찾으셔야 하지만
                어렵지 않아요 \n 약불에서 10분이면 폭신하고 부드러운 수플레 팬케이크,
                누구나 만`}
            </Accordion>
            <Accordion title={<IngredientsTitle />}>
              <CheckItem isChecked={false}>애호박 1개</CheckItem>
              <CheckItem isChecked={false}>계란 2개</CheckItem>
              <CheckItem isChecked={false}>밀가루 1컵</CheckItem>
              <CheckItem isChecked={true}>우유 1/2컵</CheckItem>
              <CheckItem isChecked={false}>베이킹파우더 1/2작은술</CheckItem>
              <CheckItem isChecked={false}>소금 1/4작은술</CheckItem>
              <CheckItem isChecked={false}>설탕 1/4컵</CheckItem>
              <CheckItem isChecked={false}>바닐라 1작은술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
              <CheckItem isChecked={false}>버터 1큰술</CheckItem>
            </Accordion>
          </PhoneLayout>
        )}
      </Body>
    </Container>
  );
};

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem;
  border-radius: 1rem;
`;

const Container = styled.div`
  max-height: calc(100vh - 1.5rem);
`;

const Body = styled.div`
  width: 100%;
  padding: 0.75rem 1.25rem;
  color: ${({ theme }) => theme.colors.white[0]};
  max-height: calc(
    100vh - (100vw * 0.5625)
  ); // 전체 크기 - 동영상 크기 (16:9)사이즈 계산
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
  }
`;

const Title = styled.div`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.screen.tablet} {
    margin-bottom: 0.75rem;
  }

  > h1 {
    ${({ theme }) => theme.font.label.lg};
    line-height: 2.125rem;

    ${({ theme }) => theme.screen.tablet} {
      ${({ theme }) => theme.font.title.lg};
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
      width: 0.0625rem;
    }

    ${({ theme }) => theme.screen.tablet} {
      ${({ theme }) => theme.font.body.md};
    }
  }
`;

const PhoneLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default YoutubeModalBody;
