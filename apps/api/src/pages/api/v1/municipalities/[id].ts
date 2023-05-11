import type { NextApiRequest, NextApiResponse } from 'next'

import { municipalitiesService } from '@/services'

import { parseIntValidator } from '@/validators/commons'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>,
) {
  const { id } = req.query

  try {
    const municipalityId = parseIntValidator(id as string)
    const municipality = municipalitiesService.findOne(municipalityId)

    return res.status(200).json(municipality)
  } catch (err) {
    const { statusCode, errorCode, message } = err as Error

    return res.status(statusCode).json({
      statusCode,
      errorCode,
      message,
    })
  }
}
