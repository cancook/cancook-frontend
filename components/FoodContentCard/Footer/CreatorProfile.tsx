import styled from '@emotion/styled';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;
const UserName = styled.p`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  letter-spacing: -0.0375rem;
`;
const Layout = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem;
  color: white;
`;

type Props = {
  src: string;
  children: ReactNode;
};

const CreatorProfile: FC<Props> = ({ src, children }) => {
  return (
    <Layout>
      <ProfileImage width={20} height={20} src={src} alt="userImage" />
      <UserName>{children}</UserName>
    </Layout>
  );
};

export default CreatorProfile;
