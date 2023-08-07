import axiosClient from '../axios';
import { Video } from '@/types/youtube';

/**
 * [GET]
 * category ingredients
 */
export const getYoutubeFromIngredient = async (nameList: string[]) => {
  const response = await axiosClient.get<Video[]>(
    '/search/get-youtube-from-ingredient',
    { params: { nameList: nameList.join(',') } }
  );

  return response.data;
};
