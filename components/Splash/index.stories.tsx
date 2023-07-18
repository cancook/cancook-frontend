import { MainContainer } from '@/pages';
import { StoryFn } from '@storybook/react';
import Splash from '.';
import styled from '@emotion/styled';

const BannerStory = {
  title: 'Component/Splash',
  component: Splash
};
export default BannerStory;

const BannerTemplate: StoryFn = () => (
  <MainContainer>
    <StyledContainer>
      <Splash />
    </StyledContainer>
  </MainContainer>
);

/**
 * 메인 페이지 진입시 보이는 Splash 페이지/검색 페이지 입니다.
 *
 * ⚠️ 현재 보여지느 페이지는 검색창을 포함하고 있지 않습니다.
 */
export const Default = BannerTemplate.bind({});

Default.args = {};

const StyledContainer = styled.div`
  background-color: #151517;
`;
