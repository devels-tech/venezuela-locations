import loadLocations from '../libs/locations'
import createErr from '@/utils/createErr'

const locations = loadLocations()

function find() {
  return locations
}

function findOne(id: number) {
  const location = locations.find(location => location['id_estado'] === id)

  if (!location) {
    throw createErr("Location not found", "NOT_FOUND", 404)
  }

  return location
}

export default { find, findOne }
