import { iSimpleCity } from './city'
import { iSimpleParish } from './parish'
import { tStateId, iSimpleState } from './state'

export interface iSimpleMunicipality {
  id: number
  stateId: tStateId
  name: string
}

interface iStateForMunicipality extends iSimpleState {
  cities: iSimpleCity[]
}
export interface Municipality extends iSimpleMunicipality {
  state: iStateForMunicipality
  parishes: iSimpleParish[]
}
