import styled from '@emotion/styled';
import React, { useRef } from 'react';
import RotatingText from './RotatingText';
import ScrollToCategory from './ScrollToCategory';
import theme from '@/styles/theme';
import SearchIcon from '@/public/svg/search.svg';
import Category from '../Category';
import SearchModal from '../Search/Modal/SearchModal';
import { showModal } from '@/provider/ModalState';

const Splash = () => {
  const ingredientList = [
    // TODO: change img to image src
    { img: 'Egg', name: '달걀' },
    { img: 'Cow Face', name: '소고기' },
    { img: 'Leafy Green', name: '양배추' },
    { img: 'Onion', name: '양파' }
  ];

  const searchRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    categoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchModalOpen = () => {
    showModal({
      show: true,
      title: '재료 찾기',
      body: <SearchModal />
    });
  };

  return (
    <SplashView>
      <SplashContainer ref={searchRef}>
        <SplashHeader>
          오늘은 <RotatingText ingredientList={ingredientList} />로
        </SplashHeader>
        <SplashHeader>어떤 요리를 만들어볼까?</SplashHeader>
        <SearchButtonContainer>
          <SearchButton onClick={handleSearchModalOpen}>
            <SearchIcon fill={theme.colors.gray[300]} />
            <span className="button-text">냉장고에 있는 재료를 골라주세요</span>
          </SearchButton>
        </SearchButtonContainer>
        <ScrollToCategory onClick={handleScrollClick} />
      </SplashContainer>
      <CategoryContainer ref={categoryRef}>
        <Category />
      </CategoryContainer>
    </SplashView>
  );
};

export default Splash;

const SplashView = styled.div`
  height: calc(100vh - 6rem);
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

// Container
const SplashContainer = styled.div`
  /* TODO: height 재설정 필요 100vh - header-height */
  height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: end;
`;

const SplashHeader = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  ${({ theme }) => theme.font.headLine.lg};
  color: #fff;

  ${({ theme }) => theme.screen.desktop} {
    font-size: 4.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0375rem;
  }
`;

const SearchButtonContainer = styled.div`
  margin: 1rem auto 0;
  padding: 0.62rem 1.5rem;
  width: 100%;

  ${({ theme }) => theme.screen.desktop} {
    margin-top: 4.5rem;
    padding: 0;
  }
`;

const SearchButton = styled.button`
  cursor: text;
  width: 100%;
  max-width: 50rem;
  height: 2.75rem;

  display: flex;
  margin: auto;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background-color: #2c2c34;
  border: none;

  .button-text {
    color: #97969e;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: -0.0375rem;
  }

  ${({ theme }) => theme.screen.desktop} {
    height: 4.5rem;
    border-radius: 1rem;

    .button-text {
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.375rem; /* 110% */
      letter-spacing: -0.0375rem;
    }
  }
`;

const CategoryContainer = styled.section`
  /* Scroll to 버튼을 덮어쓰기 */
  position: relative;
  z-index: 1;

  background-color: black;
  scroll-snap-align: start;
`;
