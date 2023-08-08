import styled from '@emotion/styled';
import React from 'react';
import CheckItem from '../common/CheckItem';

const Ingredients = () => {
  return (
    <Container>
      <Title>
        <h2>재료</h2>
        <div>
          <span>2</span>
          <span>7</span>
        </div>
      </Title>
      <CheckItem isChecked={false}>애호박 1개</CheckItem>
      <CheckItem isChecked={false}>계란 2개</CheckItem>
      <CheckItem isChecked={false}>밀가루 1컵</CheckItem>
      <CheckItem isChecked={true}>우유 1/2컵</CheckItem>
      <CheckItem isChecked={false}>베이킹파우더 1/2작은술</CheckItem>
      <CheckItem isChecked={false}>소금 1/4작은술</CheckItem>
      <CheckItem isChecked={false}>설탕 1/4컵</CheckItem>
      <CheckItem isChecked={false}>바닐라 1작은술</CheckItem>
      <CheckItem isChecked={false}>버터 1큰술</CheckItem>
      <CheckItem isChecked={false}>버터 1큰술</CheckItem>
      <CheckItem isChecked={false}>버터 1큰술</CheckItem>
      <CheckItem isChecked={false}>버터 1큰술</CheckItem>
      <CheckItem isChecked={false}>버터 1큰술</CheckItem>
      <CheckItem isChecked={false}>버터 1큰술</CheckItem>
    </Container>
  );
};

export default Ingredients;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem;
  border-radius: 1rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  > h2 {
    ${({ theme }) => theme.font.title.md};
  }

  > div > span {
    &:first-of-type {
      color: ${({ theme }) => theme.colors.yellow[400]};
    }
    &:first-of-type::after {
      content: '/';
      color: ${({ theme }) => theme.colors.white[0]};
    }
  }
`;
