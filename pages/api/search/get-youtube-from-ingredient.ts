import { SEARCH_RESULT_DUMMY_DATA } from '@/constants/dummyData/result';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof SEARCH_RESULT_DUMMY_DATA>
) {
  res.status(200).json(SEARCH_RESULT_DUMMY_DATA);
}
