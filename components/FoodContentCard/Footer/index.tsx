import styled from '@emotion/styled';
import Image from 'next/image';
import React, { ReactNode } from 'react';

const ProfileLayout = styled.div`
  display: flex;
  margin-top: 0.625rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[200]};
`;
const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

const UserName = styled.p`
  margin-left: 0.5rem;
  ${({ theme }) => theme.font.label.md};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ViewAndDates = styled.h5`
  margin-left: 0.5rem;
  ${({ theme }) => theme.font.body.sm};
  color: ${({ theme }) => theme.colors.gray[400]};

  ${({ theme }) => theme.screen.desktop} {
    ${({ theme }) => theme.font.body.md};
  }
`;

type Props = {
  /**
   * 프로필 이미지의 경로를 나타냅니다.
   */
  src: string;
  /**
   * 조회수와 날짜를 나타냅니다.
   */
  viewAndDates?: string;
  /**
   * 프로필 이름을 나타냅니다.
   */
  children: ReactNode;
};

const FoodContentCardFooter = ({ src, viewAndDates, children }: Props) => {
  return (
    <ProfileLayout>
      <ProfileImage width={20} height={20} src={src} alt="userImage" />
      <UserName>{children}</UserName>
      <ViewAndDates>{viewAndDates}</ViewAndDates>
    </ProfileLayout>
  );
};

export default FoodContentCardFooter;
