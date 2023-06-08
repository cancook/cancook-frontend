import { YOUTUBE_CATEGORY_DUMMY_DATA } from '@/constants/dummyData/youtube';
import { YoutubeCategory } from '@/types/youtube';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<YoutubeCategory[]>
) {
  res.status(200).json(YOUTUBE_CATEGORY_DUMMY_DATA);
}
