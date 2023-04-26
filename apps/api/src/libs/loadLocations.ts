import path from 'path'
import fs from 'fs'
import { iSimpleState } from '@/utils/interfaces/state'
import { iSimpleCity } from '@/utils/interfaces/city'
import { iSimpleMunicipality } from '@/utils/interfaces/municipality'
import { iSimpleParish } from '@/utils/interfaces/parish'

export const LOCATIONS_JSON_DIR_PATH = path.join(process.cwd(), 'src', 'json')

export const STATES_JSON_FILE_PATH = path.resolve(
  LOCATIONS_JSON_DIR_PATH,
  'states.json',
)
export const CITIES_JSON_FILE_PATH = path.resolve(
  LOCATIONS_JSON_DIR_PATH,
  'cities.json',
)
export const MUNICIPALITIES_JSON_FILE_PATH = path.resolve(
  LOCATIONS_JSON_DIR_PATH,
  'municipalities.json',
)
export const PARISHES_JSON_FILE_PATH = path.resolve(
  LOCATIONS_JSON_DIR_PATH,
  'parishes.json',
)

function loadJson(path: string) {
  const dataBuffer = fs.readFileSync(path, 'utf8')

  const dataJSON = dataBuffer.toString()

  return JSON.parse(dataJSON)
}

function loadStates(): iSimpleState[] {
  try {
    return loadJson(STATES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

function loadCities(): iSimpleCity[] {
  try {
    return loadJson(CITIES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

function loadMunicipalities(): iSimpleMunicipality[] {
  try {
    return loadJson(MUNICIPALITIES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

function loadParishes(): iSimpleParish[] {
  try {
    return loadJson(PARISHES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

export { loadCities, loadMunicipalities, loadParishes, loadStates }
