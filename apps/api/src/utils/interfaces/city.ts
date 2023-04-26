import { Municipality } from './municipality'
import { iSimpleState, tStateId } from './state'

export interface iSimpleCity {
  id: number
  stateId: tStateId
  name: string
  capital: boolean
}

export interface iStateForCity extends iSimpleState {
  municipalities: Municipality[]
}

export interface iCity extends iSimpleCity {
  state: iStateForCity
}
