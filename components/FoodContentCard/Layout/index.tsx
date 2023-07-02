import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const Layout = styled.article`
  // Responsive 한 카드를 위한 width, height 설정 제거

  padding-bottom: 1.25rem;

  ${({ theme }) => theme.screen.desktop} {
    padding-bottom: 2rem;
  }
`;

const FoodContentCardLayout = ({ children }: PropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default FoodContentCardLayout;
