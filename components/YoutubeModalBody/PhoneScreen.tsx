import React from 'react';
import CheckItem from '../common/CheckItem';
import Accordion from '../common/Accordion';
import IngredientsTitle from './IngredientsTitle';
import styled from '@emotion/styled';

const PhoneScreen = () => {
  return (
    <PhoneLayout>
      <Accordion title="더보기">
        {`계란 2개로 만드는 수플레 팬케이크 🥞 | Souffle Pancake \n 우선 단단한 머랭을 만들어주세요. \n 바닥이 두꺼운 프라이팬에 반죽이 서로 붙지
          않도록 자리를 잘 잡아주고수플레 팬케이크는 단단한 머랭과 불 조절이
          제일 중요한 것 같아요 \n 강불이면 쉽게 타버리고, 불이 약하면 옆으로
          퍼지고 쉽게 주저앉아요 😩 \n 나한테 맞는 불 조절을 찾으셔야 하지만
          어렵지 않아요 \n 약불에서 10분이면 폭신하고 부드러운 수플레 팬케이크,
          누구나 만`}
      </Accordion>
      <Accordion title={<IngredientsTitle />}>
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
      </Accordion>
    </PhoneLayout>
  );
};

export default PhoneScreen;

const PhoneLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.font.body.sm}
`;
