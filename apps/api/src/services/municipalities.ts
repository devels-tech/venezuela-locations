import {
  loadCities,
  loadMunicipalities,
  loadParishes,
  loadStates,
} from '@/libs/loadLocations'
import createErr from '@/utils/createErr'
import {
  Municipality,
  SingleMunicipality,
} from '@/utils/interfaces/municipality'

const municipalitiesData = loadMunicipalities()

const statesData = loadStates()
const parishesData = loadParishes()
const citiesData = loadCities()

function find(): Municipality[] {
  const municipalities = municipalitiesData.map((municipality) =>
    joinData(municipality),
  )

  return municipalities
}

function findOne(id: number): Municipality {
  const municipalities = municipalitiesData.find((state) => state.id === id)

  if (!municipalities) {
    throw createErr('The State Id isn´t correct', 'Not Found', 404)
  }

  return joinData(municipalities)
}

function joinData(municipality: SingleMunicipality) {
  const state = statesData.find(({ id }) => id === municipality.stateId)
  const cities = citiesData.filter(({ stateId }) => stateId === state.id)
  const parishes = parishesData.filter(
    ({ municipalityId }) => municipalityId === municipality.stateId,
  )

  return {
    ...municipality,
    state: { ...state, cities },
    parishes,
  }
}

export default { find, findOne }
