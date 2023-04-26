import type { NextApiRequest, NextApiResponse } from 'next'

import { municipalitiesService } from '@/services'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>, // TODO: una vez que la interfaz se cree se debe declarar acá
) {
  const municipalities = municipalitiesService.find()
  res.status(200).json(municipalities)
}
