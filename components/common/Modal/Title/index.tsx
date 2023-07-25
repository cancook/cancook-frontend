import styled from '@emotion/styled';
import React from 'react';
import CloseButton from '@/public/svg/close.svg';
import { closeModal } from '@/provider/ModalState';

/**
 * Title Container 를 넣으면 Title 과 X 버튼이 동시에 나옵니다.
 */
type TitleContainerProps = {
  children: React.ReactNode;
};

const TitleContainer = ({ children }: TitleContainerProps) => {
  return (
    <ModalTitleContainer>
      <TitleLineContiainer onClick={closeModal}></TitleLineContiainer>
      <TitleLine onClick={close}></TitleLine>
      <ModalTitle>{children}</ModalTitle>
      <ModalCloseButton onClick={closeModal}>
        <CloseButton />
      </ModalCloseButton>
    </ModalTitleContainer>
  );
};

export default TitleContainer;

const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  height: 2.625rem;

  ${({ theme }) => theme.screen.tablet} {
    padding: 1.5rem;
  }
`;

const ModalTitle = styled.h1`
  display: none;

  ${({ theme }) => theme.screen.tablet} {
    display: block;
    ${({ theme }) => theme.font.title.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

const TitleLineContiainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.screen.tablet} {
    display: none;
  }
`;

const TitleLine = styled.span`
  position: absolute;
  top: 0.62rem;
  left: 50%;

  content: '';
  width: 2.1875rem;
  height: 0.25rem;
  background-color: rgba(255, 255, 255, 0.5);
  transform: translateX(-50%);
  border-radius: 0.125rem;

  ${({ theme }) => theme.screen.tablet} {
    display: none;
  }
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
