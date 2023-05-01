import styled from '@emotion/styled';
import React from 'react';

/**
 * Main 페이지의 Header Navigation 입니다.
 * TODO: 현재로서는 Logo 만 있는 상태, 나중에 Search 바 추가 예정
 *
 */
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  width: 100%;
  height: 80px;

  background-color: #000;
`;

const Logo = styled.div`
  color: #fff;
  font-weight: bold;
`;
