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
      body: (
        <YoutubeModalBody
          title="계란 2개로 폭신폭신 부드러운 수플레 팬케이크 만들기 🥞 | Souffle Pancake"
          description={`계란 2개로 만드는 수플레 팬케이크 🥞 | Souffle Pancake\n우선 단단한 머랭을 만들어주세요. \n바닥이 두꺼운 프라이팬에 반죽이 서로 붙지 않도록 자리를 잘 잡아주고\n수플레 팬케이크는 단단한 머랭과 불 조절이 제일 중요한 것 같아요\n강불이면 쉽게 타버리고, 불이 약하면 옆으로 퍼지고 쉽게 주저앉아요 😩\n나한테 맞는 불 조절을 찾으셔야 하지만 어렵지 않아요 \n약불에서 10분이면 폭신하고 부드러운 수플레 팬케이크, 누구나 만\n`}
          ingredients={[
            '애호박 1개',
            '대파',
            '양파',
            '계란 2개',
            '밀가루 1컵',
            '우유 1컵',
            '베이킹파우더 1작은술',
            '소금 1작은술'
          ]}
          viewCount={85467}
          createAt="2021-08-01"
        />
      )
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
