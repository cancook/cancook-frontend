import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const BodyLayout = styled.div`
  padding: 1rem 0rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
`;

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.font.label.lg}

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.title.sm};
    font-size: 1rem;
  }
`;

const Subtitle = styled.h5`
  ${({ theme }) => theme.font.body.md};

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.label.lg};
  }
`;

type Props = {
  /**
   * 게시글의 제목을 나타냅니다.
   */
  title: string;
  /**
   * 게시글의 부제목을 나타냅니다.
   */
  subTitle?: string;
  /**
   * 기본 제공되는 레이아웃 이외에 노드를 직접 넣어 사용할수 있습니다.
   */
  children?: ReactNode;
};

const FoodContentCardBody = ({ title, subTitle, children }: Props) => {
  return (
    <BodyLayout>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
      {children}
    </BodyLayout>
  );
};

export default FoodContentCardBody;
