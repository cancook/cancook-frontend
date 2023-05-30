import { youtubeCategoryDummyData } from '@/constants/dummyData/recommendation';
import { YoutubeCategory } from '@/types/youtube';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<YoutubeCategory[]>
) {
  res.status(200).json(youtubeCategoryDummyData);
}
