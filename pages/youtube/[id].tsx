import getYoutubeDetail from '@/apis/youtube/getYoutubeDetail';
import YoutubeModalBody from '@/components/YoutubeModalBody';
import { showModal } from '@/provider/ModalState';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const YoutubeVideoPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
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
  }, [id]);

  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const id = context.query.id as string;
  await queryClient.prefetchQuery(['youtube', 'detail', id], () =>
    getYoutubeDetail(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default YoutubeVideoPage;
