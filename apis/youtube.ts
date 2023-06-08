import { YoutubeCategory, YoutubeRecommended } from '@/types/youtube';
import axiosClient from './axios';

export const getRecommendedList = async () => {
  const response = await axiosClient.get<YoutubeRecommended[]>(
    '/youtube/recommended-list'
  );

  return response.data;
};

export const getCategoryList = async () => {
  const response = await axiosClient.get<YoutubeCategory[]>(
    '/youtube/category-list'
  );

  return response.data;
};
