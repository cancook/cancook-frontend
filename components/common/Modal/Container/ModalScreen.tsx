import styled from '@emotion/styled';
import React from 'react';

type ModalScreenContainer = {
  show: boolean;
  children: React.ReactNode;
};

const ModalScreenContainer = ({ show, children }: ModalScreenContainer) => {
  return <ModalContainer show={show}>{children}</ModalContainer>;
};

export default ModalScreenContainer;

const ModalContainer = styled.div<Pick<ModalScreenContainer, 'show'>>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
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
