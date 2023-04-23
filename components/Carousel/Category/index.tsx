import styled from '@emotion/styled';
import React from 'react';
import CardCarousel, { CardProps } from './Card';

type Props = {
  /**
   * category의 이름
   */
  title: string;

  /**
   * 카드에 들어가는 컨텐츠
   */
  contents: CardProps[];
};

const Category = ({ title, contents }: Props) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <CardCarousel cards={contents} />
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div``;

const CategoryTitle = styled.h2`
  color: white;
  padding: 2rem;
`;
