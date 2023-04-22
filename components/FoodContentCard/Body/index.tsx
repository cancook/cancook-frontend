import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const BodyLayout = styled.div`
  padding: 1rem 0rem 0rem 0rem;
  color: white;
  line-height: 1.375rem;
  letter-spacing: -0.0375rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
`;

const Subtitle = styled.h5`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

type Props = {
  /**
   * 게시글의 제목을 나타냅니다.
   */
  title: string;
  /**
   * 게시글의 부제목을 나타냅니다.
   */
  subTitle: string;
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
