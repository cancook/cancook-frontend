import YoutubeModalBody from '@/components/YoutubeModalBody';
import { showModal } from '@/provider/ModalState';
import { useRouter } from 'next/router';

const YoutubeVideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id === 'string') {
    showModal({
      fullScreen: true,
      show: true,
      body: <YoutubeModalBody id={id} />,
      onClose: () => {
        router.push('/');
      }
    });
  }

  return <></>;
};

export default YoutubeVideoPage;
