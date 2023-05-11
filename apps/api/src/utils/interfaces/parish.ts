// import { iSimpleMunicipality } from './municipality'

interface Coordinates {
  lat: number
  lng: number
}

export interface iSimpleParish {
  id: number
  municipalityId: number
  name: string
  coordinates: Coordinates
}

export interface iParish extends iSimpleParish {
  // municipality: iSimpleMunicipality
  stateId: number
}
