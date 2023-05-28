import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutContainer>
      <Header />
      <Body>{children}</Body>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.main`
  overflow: auto;
  min-width: 78.75rem;
`;

const Body = styled.section``;
