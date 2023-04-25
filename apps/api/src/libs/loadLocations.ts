import path from 'path'
import fs from 'fs'

export const LOCATIONS_JSON_DIR_PATH = path.join(process.cwd(), 'src', 'json')

export const LOCATIONS_JSON_FILE_PATH = path.resolve(
  LOCATIONS_JSON_DIR_PATH,
  'venezuela-locations.json',
)

export default function loadLocations() {
  try {
    const dataBuffer = fs.readFileSync(LOCATIONS_JSON_FILE_PATH, 'utf8')

    const dataJSON = dataBuffer.toString()

    return JSON.parse(dataJSON)
  } catch (err) {
    console.log('Error al obtener la data:', err)
    return []
  }
}
