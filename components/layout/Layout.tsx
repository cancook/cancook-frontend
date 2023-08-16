import styled from '@emotion/styled';
import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import { useRouter } from 'next/router';

const TIMEOUT = 400;
const getTransitionStyles = {
  entering: { opacity: 0, transition: `opacity ${TIMEOUT}ms ease-in-out` },
  entered: { opacity: 1, transition: `opacity ${TIMEOUT}ms ease-in-out` },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
} as const;

type LayoutProps = {
  children: React.ReactNode;
  searchable?: boolean;
};

const Layout = ({ children, searchable }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Header searchable={searchable} />
      <TransitionGroup component={null}>
        <Transition key={router.pathname} timeout={TIMEOUT}>
          {(state) => {
            return (
              <main
                style={{
                  ...getTransitionStyles[state]
                }}
              >
                <Body>{children}</Body>
              </main>
            );
          }}
        </Transition>
      </TransitionGroup>
    </>
  );
};

export default Layout;

const Body = styled.section``;
