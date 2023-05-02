import { iSimpleCity } from './city'
import { Municipality } from './municipality'

export type tStateId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25

export interface iSimpleState {
  id: tStateId
  name: string
  iso: string
}

export interface iState extends iSimpleState {
  cities: iSimpleCity[]
  municipalities: Municipality[]
}
