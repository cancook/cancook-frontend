import { StoryFn } from '@storybook/react';
import { ModalState, showModal } from '@/provider/ModalState';
import YoutubeModalBody from '.';
import ModalComponent from '../common/Modal';

const YoutubeModalComponent = {
  title: 'Component/common/Modal/YoutubeModalBody',
  component: YoutubeModalBody
};
export default YoutubeModalComponent;

const YoutubeModalTemplate: StoryFn<{ args: ModalState }> = () => {
  const handleModalClick = () => {
    showModal({
      fullScreen: true,
      show: true,
      body: <YoutubeModalBody />
    });
  };
  return (
    <>
      <ModalComponent />
      <button onClick={handleModalClick}>모달 클릭</button>
    </>
  );
};

/**
 * 가장 기본적인 Modal 입니다.
 */
export const Default = YoutubeModalTemplate.bind({});
// Default.args = {
//   args: { show: true, body: <div>Test1</div> }
// };
