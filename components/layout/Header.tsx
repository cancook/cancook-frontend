import styled from '@emotion/styled';
import MainLogo from '@/public/svg/cancook-logo.svg';
import React from 'react';
import { useRouter } from 'next/router';
import { showModal } from '@/provider/ModalState';
import SearchModal from '@/components/Search/Modal/SearchModal';
import SearchInput from '@/components/Search/SearchInput';

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

const SearchInputWrapper = styled.div`
  width: 100%;
  max-width: calc(80rem - 2.5rem);
  ${({ theme }) => theme.screen.desktop} {
    width: 50rem;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
`;

const Header = ({ searchable }: { searchable?: boolean }) => {
  const router = useRouter();

  const handleSearchModalOpen = () => {
    showModal({
      show: true,
      title: '재료 찾기',
      body: <SearchModal />
    });
  };

  return (
    <StickyHeader>
      <HeaderWrapper>
        <MainLogo
          onClick={() => router.push('/')}
          style={{
            cursor: 'pointer'
          }}
        />
        {searchable && (
          <SearchInputWrapper>
            <SearchInput
              isFocus={false}
              onInputWrapperClick={handleSearchModalOpen}
              disabled
            />
          </SearchInputWrapper>
        )}
      </HeaderWrapper>
    </StickyHeader>
  );
};

export default Header;
