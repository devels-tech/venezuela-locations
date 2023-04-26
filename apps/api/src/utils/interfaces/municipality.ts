import { iSimpleCity } from './city'
import { Parish } from './parish'
import { tStateId, iSimpleState } from './state'

export interface SingleMunicipality {
  id: number
  stateId: tStateId
  name: string
}

interface StateForMunicipality extends iSimpleState {
  cities: iSimpleCity[]
}
export interface Municipality extends SingleMunicipality {
  state: StateForMunicipality
  parishes: Parish[]
}
