import getYoutubeDetail from '@/apis/youtube/getYoutubeDetail';
import { useQuery } from '@tanstack/react-query';

const useYoutubeDetail = (id: string) => {
  const { data, ...rest } = useQuery([`youtube/detail/${id}`], () =>
    getYoutubeDetail(id)
  );

  return { data, ...rest };
};

export default useYoutubeDetail;
