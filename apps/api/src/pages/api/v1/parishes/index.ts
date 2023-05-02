import type { NextApiRequest, NextApiResponse } from 'next'

import { parishesService } from '@/services'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>, // TODO: una vez que la interfaz se cree se debe declarar acá
) {
  const parishes = parishesService.find()
  res.status(200).json(parishes)
}
