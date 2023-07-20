import React from 'react';
import styled from '@emotion/styled';
import CloseButton from '@/public/svg/close.svg';
import { ModalState, useModalStore } from './ModalState';

function Modal() {
  const store = useModalStore();
  const close = () => useModalStore.setState({ show: false });

  return (
    <>
      <ModalBackground show={store.show} onClick={close} />

      <ModalContainer show={store.show}>
        <ModalTitleContainer>
          <ModalTitle>{store.title ? store.title : ''}</ModalTitle>
          <ModalCloseButton onClick={close}>
            <CloseButton />
          </ModalCloseButton>
        </ModalTitleContainer>
        <ModalBodyContainer className={store.className}>
          {store.body}
        </ModalBodyContainer>
      </ModalContainer>
    </>
  );
}

export default Modal;

const ModalBackground = styled.div<Pick<ModalState, 'show'>>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: #000000cc;
`;

const ModalContainer = styled.div<Pick<ModalState, 'show'>>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  z-index: 99;

  ${({ theme }) => theme.screen.tablet} {
    background-color: ${({ theme }) => theme.colors.gray[600]};
    width: 35rem;
    top: 50%;
    left: 50%;
    bottom: auto;
    border-radius: 1.5rem;
    transform: translate(-50%, -50%);
  }
`;
const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0.5rem;

  ${({ theme }) => theme.screen.tablet} {
    padding: 1.5rem;
  }
`;

const ModalTitle = styled.h1`
  ${({ theme }) => theme.font.title.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

const ModalCloseButton = styled.button`
  display: none;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: none;

  ${({ theme }) => theme.screen.tablet} {
    display: block;
  }
`;

const ModalBodyContainer = styled.div``;
