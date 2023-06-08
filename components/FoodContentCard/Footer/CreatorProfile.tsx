import styled from '@emotion/styled';
import Image from 'next/image';
import React, { ReactNode } from 'react';

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
const ProfileLayout = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

type Props = {
  /**
   * 프로필 이미지의 경로를 나타냅니다.
   */
  src: string;
  /**
   * 프로필 이름을 나타냅니다.
   */
  children: ReactNode;
};

const CreatorProfile = ({ src, children }: Props) => {
  return (
    <ProfileLayout>
      <ProfileImage width={20} height={20} src={src} alt="userImage" />
      <UserName>{children}</UserName>
    </ProfileLayout>
  );
};

export default CreatorProfile;
