import styled from '@emotion/styled';
import React from 'react';
import YouTube from 'react-youtube';
import Ingredients from './Ingredients';
import Collapse from './Collapse';

// type YoutubeModalBodyProps = {
//   isShow: boolean;
// };

const YoutubeModalBody = () => {
  return (
    <Container>
      <YouTube
        videoId="uSpZpduIFnA"
        opts={{
          width: 800,
          height: 800 * (9 / 16)
        }}
        style={{
          overflow: 'hidden',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem'
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
        <Collapse>
          {`계란 2개로 만드는 수플레 팬케이크 🥞 | Souffle Pancake \n 우선 단단한 머랭을 만들어주세요. \n 바닥이 두꺼운 프라이팬에 반죽이 서로 붙지
              않도록 자리를 잘 잡아주고수플레 팬케이크는 단단한 머랭과 불 조절이
              제일 중요한 것 같아요 \n 강불이면 쉽게 타버리고, 불이 약하면 옆으로
              퍼지고 쉽게 주저앉아요 😩 \n 나한테 맞는 불 조절을 찾으셔야 하지만
              어렵지 않아요 \n 약불에서 10분이면 폭신하고 부드러운 수플레 팬케이크,
              누구나 만`}
        </Collapse>
        <Ingredients></Ingredients>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  max-height: calc(100vh - 1.5rem);
`;

const Body = styled.div`
  width: 100%;
  padding: 2.125rem;
  color: ${({ theme }) => theme.colors.white[0]};
  max-height: calc(100vh - 31.125rem);
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Title = styled.div`
  margin-bottom: 1.5rem;
  > h1 {
    ${({ theme }) => theme.font.title.lg};
    line-height: 2.125rem;
  }

  > h6 {
    ${({ theme }) => theme.font.body.md};
    color: ${({ theme }) => theme.colors.gray[100]};
    display: inline-block;

    &:first-of-type::after {
      content: '|';
      margin: 0 0.5rem;
      color: ${({ theme }) => theme.colors.gray[600]};
      width: 0.0625rem;
    }
  }
`;

export default YoutubeModalBody;
