import type { NextApiRequest, NextApiResponse } from 'next'

import { citiesService } from '@/services'

// TODO: la idea es montar la interface cuando ya se haya definido la devolución de las localizaciones
interface Data {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>, // TODO: una vez que la interfaz se cree se debe declarar acá
) {
  const cities = citiesService.find()
  res.status(200).json(cities)
}
