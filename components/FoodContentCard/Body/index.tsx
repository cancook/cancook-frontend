import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import LocationAddIcon from '@/public/svg/location-add.svg';

const BodyLayout = styled.div`
  padding: 1rem 0rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
`;

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  height: 2.75rem;
  ${({ theme }) => theme.font.label.lg}
  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.title.sm};
    font-size: 1rem;
    height: 3.5rem;
  }
`;

const Subtitle = styled.h5`
  ${({ theme }) => theme.font.body.md};

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.label.lg};
  }
`;

const AdditionalMark = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  > span {
    ${({ theme }) => theme.font.label.sm};
    color: ${({ theme }) => theme.colors.yellow[400]};
  }
`;

type Props = {
  /**
   * 게시글의 제목을 나타냅니다.
   */
  title: string;
  /**
   * 게시글의 부제목을 나타냅니다.
   */
  subTitle?: string;
  /**
   * 게시글에서 부족한 재료의 개수를 나타냅니다.
   */
  ingredientCount?: number;
  /**
   * 기본 제공되는 레이아웃 이외에 노드를 직접 넣어 사용할수 있습니다.
   */

  children?: ReactNode;
};

const FoodContentCardBody = ({
  title,
  subTitle,
  ingredientCount,
  children
}: Props) => {
  return (
    <BodyLayout>
      {ingredientCount && (
        <AdditionalMark>
          <LocationAddIcon />
          <span>추가 재료 + {ingredientCount} </span>
        </AdditionalMark>
      )}
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
      {children}
    </BodyLayout>
  );
};

export default FoodContentCardBody;
