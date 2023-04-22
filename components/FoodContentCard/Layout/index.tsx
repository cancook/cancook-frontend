import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const Layout = styled.article``;

const FoodContentCardLayout = ({ children }: PropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default FoodContentCardLayout;
