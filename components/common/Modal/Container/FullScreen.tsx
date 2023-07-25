import styled from '@emotion/styled';
import React from 'react';

type ModalFullScreenContainer = {
  show: boolean;
  children: React.ReactNode;
};

const ModalFullScreenContainer = ({
  show,
  children
}: ModalFullScreenContainer) => {
  return <ModalContainer show={show}>{children}</ModalContainer>;
};

export default ModalFullScreenContainer;

const ModalContainer = styled.div<Pick<ModalFullScreenContainer, 'show'>>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  z-index: 99;

  ${({ theme }) => theme.screen.tablet} {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    width: 35rem;
    top: 50%;
    left: 50%;
    bottom: auto;
    border-radius: 1.5rem;
    transform: translate(-50%, -50%);
  }
`;
