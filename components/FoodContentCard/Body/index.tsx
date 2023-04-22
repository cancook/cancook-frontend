import styled from '@emotion/styled';
import React from 'react';

const Layout = styled.div`
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
};

const FoodContentCardBody = ({ title, subTitle }: Props) => {
  return (
    <Layout>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </Layout>
  );
};

export default FoodContentCardBody;
