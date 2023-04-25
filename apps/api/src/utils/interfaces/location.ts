export type idEstado =
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

interface Municipio {
  municipio: string
  capital: string
  parroquias: string[]
}

export interface Estado {
  iso_31662: string
  estado: string
  capital: string
  id_estado: idEstado
  municipios: Municipio[]
  ciudades: string[]
}
