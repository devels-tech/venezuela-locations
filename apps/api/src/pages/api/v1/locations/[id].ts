import type { NextApiRequest, NextApiResponse } from 'next'

import { locationsService } from '@/services'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>,
) {
  const { id } = req.query

  try {
    const locationId = parseInt(id as string)
    const location = locationsService.findOne(locationId)
    return res.status(200).json(location)
  } catch (err) {
    const { statusCode, errorCode, message } = err as any // TODO: cambiar tipo
    return res.status(statusCode).json({
      statusCode,
      errorCode,
      message,
    })
  }
}