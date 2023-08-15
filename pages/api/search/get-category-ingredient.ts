import { CATEGORY_INGREDIENT } from '@/constants/dummyData/categoryIngredient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof CATEGORY_INGREDIENT>
) {
  res.status(200).json(CATEGORY_INGREDIENT);
}
