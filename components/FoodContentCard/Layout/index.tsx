import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const Layout = styled.article`
  width: 18.75rem;
  height: 19.5rem;
`;

const FoodContentCardLayout = ({ children }: PropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default FoodContentCardLayout;
