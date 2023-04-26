import type { NextApiRequest, NextApiResponse } from 'next'

import { parishesService } from '@/services'

import { parseIntValidator } from '@/validators/commons'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>,
) {
  const { id } = req.query

  try {
    const cityId = parseIntValidator(id as string)
    const city = parishesService.findOne(cityId)

    return res.status(200).json(city)
  } catch (err) {
    const { statusCode, errorCode, message } = err as any // TODO: cambiar tipo

    return res.status(statusCode).json({
      statusCode,
      errorCode,
      message,
    })
  }
}
