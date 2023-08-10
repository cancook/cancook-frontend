import styled from '@emotion/styled';
import MainLogo from '@/public/svg/cancook_logo.svg';
import React from 'react';
import { useRouter } from 'next/router';

const HeaderWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1.25rem 1rem;
  ${({ theme }) => theme.screen.desktop} {
    height: 6rem;
    padding: 1.5rem 2.5rem;
    flex-direction: row;
    gap: 0;
  }
`;

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
`;

const Header = () => {
  const router = useRouter();

  return (
    <StickyHeader>
      <HeaderWrapper>
        <MainLogo
          onClick={() => router.push('/')}
          style={{
            cursor: 'pointer'
          }}
        />
      </HeaderWrapper>
    </StickyHeader>
  );
};

export default Header;
