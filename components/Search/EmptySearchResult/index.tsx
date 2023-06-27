import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import emptyGIFPath from '../../../public/gifs/stir-cook.gif';

const Wrapper = styled.div`
  ${({ theme }) => theme.screen.mobile} {
    width: 11rem;
    height: 8.5rem;
  }
  ${({ theme }) => theme.screen.tablet} {
    width: 11rem;
    height: 8.5rem;
  }
  ${({ theme }) => theme.screen.desktop} {
    width: 19.3125rem;
    height: 21rem;
  }
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: center;
  ${({ theme }) => theme.screen.mobile} {
    ${({ theme }) => theme.font.body.md};
  }
  ${({ theme }) => theme.screen.tablet} {
    ${({ theme }) => theme.font.body.md};
  }
  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.title.lg};
    line-height: 2.125rem;
  }
`;

const EmptyResultImage = styled(Image)`
  display: block;
  margin: auto;

  ${({ theme }) => theme.screen.mobile} {
    width: 5rem;
    height: 5rem;
  }
  ${({ theme }) => theme.screen.tablet} {
    width: 5rem;
    height: 5rem;
  }
  ${({ theme }) => theme.screen.desktop} {
    width: 260px;
    height: 260px;
  }
`;

const EmptySearchResult = () => {
  return (
    <Wrapper>
      <EmptyResultImage src={emptyGIFPath} alt="empty search image" />
      <Text>
        자고 있는 재료들을 깨워 <br />
        만들수 있는 레시피를 찾고 있어요.
      </Text>
    </Wrapper>
  );
};

export default EmptySearchResult;
