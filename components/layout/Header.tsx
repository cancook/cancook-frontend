import styled from '@emotion/styled';
import React from 'react';
import SelfDiningLogoIcon from '@/public/svg/self_dining_logo.svg';

/**
 * Main 페이지의 Header Navigation 입니다.
 * TODO: 현재로서는 Logo 만 있는 상태, 나중에 Search 바 추가 예정
 *
 */
const Header = () => {
  return (
    <HeaderContainer>
      <SelfDiningLogoIcon />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin-top: 4.875rem;
  width: 100%;
`;
