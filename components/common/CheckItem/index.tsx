import React, { ReactNode } from 'react';
import CheckSVGIcon from '@/public/svg/check.svg';
import styled from '@emotion/styled';

type CheckItemProps = {
  isChecked: boolean;
  children: ReactNode;
};

const CheckItem = ({ isChecked, children }: CheckItemProps) => {
  return (
    <Layout isChecked={isChecked} className="check-item-layout">
      <CheckIcon className="check-item-icon" isChecked={isChecked} />
      <span>{children}</span>
    </Layout>
  );
};

const CheckIcon = styled(CheckSVGIcon)`
  color: ${({ theme, isChecked }) => isChecked && theme.colors.yellow[400]};
  margin-right: 0.25rem;
`;

const Layout = styled.div<{ isChecked: Boolean }>`
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.yellow[400] : theme.colors.gray[200]};
`;

export default CheckItem;
