import path from 'path'
import fs from 'fs'

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

function loadStates() {
  try {
    return loadJson(STATES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

function loadCities() {
  try {
    return loadJson(CITIES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

function loadMunicipalities() {
  try {
    return loadJson(MUNICIPALITIES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

function loadParishes() {
  try {
    return loadJson(PARISHES_JSON_FILE_PATH)
  } catch (err) {
    console.log('Error al obtener los estados:', err)
    return []
  }
}

export { loadCities, loadMunicipalities, loadParishes, loadStates }
