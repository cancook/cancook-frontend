import { youtubeBannerDummyData } from '@/constants/dummyData/recommendation';
import { YoutubeRecommended } from '@/types/youtube';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<YoutubeRecommended[]>
) {
  res.status(200).json(youtubeBannerDummyData);
}
