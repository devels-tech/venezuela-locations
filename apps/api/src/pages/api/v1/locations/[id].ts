import type { NextApiRequest, NextApiResponse } from 'next'

import { locationsService } from '@/services'
import { idEstado } from '@/utils/interfaces/location'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>,
) {
  const { id } = req.query

  try {
    const locationId = parseInt(id as string)
    if (locationId >= 1 && locationId <= 24) {
      const location = locationsService.findOne(locationId as idEstado)

      return res.status(200).json(location)
    } else {
      return res.status(404).json({
        statusCode: 404,
        errorCode: 'Not Found',
        message: 'The State Id isn´t correct',
      })
    }
  } catch (err) {
    const { statusCode, errorCode, message } = err as any // TODO: cambiar tipo

    return res.status(statusCode).json({
      statusCode,
      errorCode,
      message,
    })
  }
}
