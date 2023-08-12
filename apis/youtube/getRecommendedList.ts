import { YoutubeRecommended } from '@/types/youtube';
import axiosClient from '../axios';

/**
 * [GET]
 * category recommended
 */

export const getRecommendedList = async () => {
  const response = await axiosClient.get<YoutubeRecommended[]>(
    '/youtube/recommended-list'
  );

  return response.data;
};
