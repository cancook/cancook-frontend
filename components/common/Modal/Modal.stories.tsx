import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import Modal from '.';
import styled from '@emotion/styled';
import { showModal } from './ModalState';

const ModalComponent = {
  title: 'Component/common/Modal',
  component: Modal
};
export default ModalComponent;

type ModalProps = ComponentProps<typeof Modal>;

const ModalTemplate: StoryFn<ModalProps> = () => {
  const handleModalClick = () => {
    showModal({
      show: true,
      title: '모달 테스트',
      body: <div>기본 모달을 띄우줍니다.</div>
    });
  };
  return (
    <Container>
      <Modal />
      <button onClick={handleModalClick}>모달 클릭</button>
    </Container>
  );
};

/**
 * 메인 버튼 컴포넌트 입니다.
 */
export const Default = ModalTemplate.bind({});
Default.args = {};

const Container = styled.div``;
