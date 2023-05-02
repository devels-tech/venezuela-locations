import type { NextApiRequest, NextApiResponse } from 'next'

import { statesService } from '@/services'

import { tStateId } from '@/utils/interfaces/state'
import { parseIntValidator } from '@/validators/commons'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>,
) {
  const { id } = req.query

  try {
    const stateId = parseIntValidator(id as string)
    const state = statesService.findOne(stateId as tStateId)

    return res.status(200).json(state)
  } catch (err) {
    const { statusCode, errorCode, message } = err as any // TODO: cambiar tipo

    return res.status(statusCode).json({
      statusCode,
      errorCode,
      message,
    })
  }
}
