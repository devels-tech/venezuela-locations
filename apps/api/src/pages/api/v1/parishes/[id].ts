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
    const parishId = parseIntValidator(id as string)
    const parish = parishesService.findOne(parishId)

    return res.status(200).json(parish)
  } catch (err) {
    const { statusCode, errorCode, message } = err as Error

    return res.status(statusCode).json({
      statusCode,
      errorCode,
      message,
    })
  }
}
