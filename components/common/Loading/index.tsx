import styled from '@emotion/styled';
import React from 'react';

type SpinnerProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
};

const Loading = ({
  width = 48,
  height = 48,
  strokeWidth = 8,
  color = '#ff6937'
}) => {
  return (
    <Wrapper>
      <PreparingImage
        src={'/gifs/preparing.gif'}
        alt="loading for cooking data"
      />
      <Text>열심히 레시피를 찾고 있어요.</Text>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreparingImage = styled.img`
  display: block;
  margin: auto;
  width: 7.5rem;
  height: 7.5rem;

  ${({ theme }) => theme.screen.desktop} {
    width: 10rem;
    height: 10rem;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: center;
  ${({ theme }) => theme.font.body.md};
  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.title.sm};
  }
`;
