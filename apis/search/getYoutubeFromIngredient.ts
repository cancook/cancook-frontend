import axiosClient from '../axios';
import { VideoInformation } from '@/types/youtube';

/**
 * [GET]
 * category ingredients
 */
export const getYoutubeFromIngredient = async (nameList: string[]) => {
  const response = await axiosClient.get<VideoInformation[]>(
    '/search/get-youtube-from-ingredient',
    { params: { nameList: nameList.join(',') } }
  );

  return response.data;
};
