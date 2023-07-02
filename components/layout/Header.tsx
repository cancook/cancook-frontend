import styled from '@emotion/styled';
import MainLogo from '@/public/svg/cancook_logo.svg';
import React from 'react';
import SearchInput from '../Search/SearchInput';
import { useRouter } from 'next/router';

const HeaderWrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  z-index: 10;
  backdrop-filter: blur(20px);
  ${({ theme }) => theme.screen.desktop} {
    height: 6rem;
    padding: 1.5rem 2.5rem;
    flex-direction: row;
    gap: 0;
  }
`;

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <MainLogo onClick={() => router.push('/')} />
      {router.pathname !== '/search' && (
        <SearchInput
          isFocus={false}
          onInputWrapperClick={() => router.push('/search')}
          disabled
        />
      )}
    </HeaderWrapper>
  );
};

export default Header;
