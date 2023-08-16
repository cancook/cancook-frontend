import { YoutubeDetail } from '@/types/youtube';
import axiosClient from '../axios';

const getYoutubeDetail = async (id: string) => {
  const response = await axiosClient.get<YoutubeDetail>(
    `/youtube/detail/${id}`
  );

  return response.data;
};

export default getYoutubeDetail;
