import { iSimpleMunicipality } from './municipality'

export interface iSimpleParish {
  id: number
  municipalityId: number
  name: string
}

export interface iParish extends iSimpleParish {
  municipality: iSimpleMunicipality
}
