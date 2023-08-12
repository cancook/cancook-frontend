import { YoutubeCategory } from '@/types/youtube';
import axiosClient from '../axios';

/**
 * [GET]
 * category list
 */
export const getCategoryList = async () => {
  const response = await axiosClient.get<YoutubeCategory[]>(
    '/youtube/category-list'
  );

  return response.data;
};
