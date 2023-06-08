import { YOUTUBE_BANNER_DUMMY_DATA } from '@/constants/dummyData/youtube';
import { YoutubeRecommended } from '@/types/youtube';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<YoutubeRecommended[]>
) {
  res.status(200).json(YOUTUBE_BANNER_DUMMY_DATA);
}
