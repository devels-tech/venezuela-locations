import { iMunicipalityWithParishes } from './municipality'
import { iSimpleState, tStateId } from './state'

export interface iSimpleCity {
  id: number
  stateId: tStateId
  name: string
  capital: boolean
}

export interface iStateForCity extends iSimpleState {
  cities: iSimpleCity[]
  municipalities: iMunicipalityWithParishes[]
}

export interface iCity extends iSimpleCity {
  // state: iStateForCity
}
