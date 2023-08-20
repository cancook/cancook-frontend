import { VideoResultInformation } from '@/types/youtube';
import axiosClient from '../axios';

/**
 * [GET]
 * category ingredients
 */
export const getYoutubeFromIngredient = async (nameList: string[]) => {
  const response = await axiosClient.get<VideoResultInformation[]>(
    '/search/get-youtube-from-ingredient',
    { params: { nameList: nameList.join(',') } }
  );

  return response.data;
};
