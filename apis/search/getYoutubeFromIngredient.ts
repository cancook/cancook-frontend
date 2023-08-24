import { VideoResultInformation } from '@/types/youtube';
import axiosClient from '../axios';

export type OrderingType = '-view_count' | '-published';
/**
 * [GET]
 * category ingredients
 */
export const getYoutubeFromIngredient = async (
  ordering: OrderingType,
  nameList: string[]
) => {
  const response = await axiosClient.get<VideoResultInformation[]>(
    '/search/get-youtube-from-ingredient',
    { params: { ordering, nameList: nameList.join(',') } }
  );

  return response.data;
};
