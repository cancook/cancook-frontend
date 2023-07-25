import { StoryFn } from '@storybook/react';
import Modal from '.';
import styled from '@emotion/styled';
import { ModalState, showModal } from '@/provider/ModalState';

const ModalComponent = {
  title: 'Component/common/Modal',
  component: Modal
};
export default ModalComponent;

const ModalTemplate: StoryFn<{ args: ModalState }> = ({
  args
}: {
  args: ModalState;
}) => {
  const handleModalClick = () => {
    showModal(args);
  };
  return (
    <Container>
      <Modal />
      <button onClick={handleModalClick}>모달 클릭</button>
    </Container>
  );
};

/**
 * 가장 기본적인 Modal 입니다.
 */
export const Default = ModalTemplate.bind({});
Default.args = {
  args: { show: true, body: <div>Test1</div> }
};

/**
 * Title 을 가지고 있는 모달입니다.
 */
export const Title = ModalTemplate.bind({});
Title.args = {
  args: {
    show: true,
    title: '타이틀을 입력하세요',
    body: <div>Title Test</div>
  }
};

/**
 * 모바일 상에서는 전체 페이지로 보이는 모달입니다.
 */
export const FullScreen = ModalTemplate.bind({});
FullScreen.args = {
  args: {
    fullScreen: true,
    show: true,
    body: <div>Full Screen Test</div>
  }
};

const Container = styled.div``;
