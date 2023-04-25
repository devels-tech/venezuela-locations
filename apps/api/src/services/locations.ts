import { Estado, idEstado } from '@/utils/interfaces/location'
import loadLocations from '../libs/loadLocations'
import createErr from '@/utils/createErr'

const locations: Estado[] = loadLocations()

function find() {
  return locations
}

function findOne(id: idEstado) {
  const location = locations.find((location) => location['id_estado'] === id)

  if (!location) {
    throw createErr('Location not found', 'NOT_FOUND', 404)
  }

  return location
}

export default { find, findOne }
