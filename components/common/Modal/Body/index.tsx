import styled from '@emotion/styled';
import React from 'react';

type BodyContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const BodyContainer = ({ className, children }: BodyContainerProps) => {
  return (
    <ModalBodyContainer className={className}>{children}</ModalBodyContainer>
  );
};

export default BodyContainer;

const ModalBodyContainer = styled.div``;
