import { YOUTUBE_DETAIL } from '@/constants/dummyData/youtube';
import { YoutubeDetail } from '@/types/youtube';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<YoutubeDetail>
) {
  res.status(200).json(YOUTUBE_DETAIL);
}
