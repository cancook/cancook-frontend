import { AUTOCOMPLETE_DUMMY_DATA } from '@/constants/dummyData/autocomplete';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AutocompleteIngredient>
) {
  res.status(200).json(AUTOCOMPLETE_DUMMY_DATA);
}
