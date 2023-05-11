import {
  loadCities,
  loadMunicipalities,
  loadParishes,
  loadStates,
} from '@/libs/loadLocations'
import createErr from '@/utils/createErr'
import { iParish, iSimpleParish } from '@/utils/interfaces/parish'
import { getStateInfo } from './states'
import { getMunicipalityInfo } from './municipalities'

const parishesData = loadParishes()

// const statesData = loadStates()
// const citiesData = loadCities()
// const municipalitiesData = loadMunicipalities()

function find(): iParish[] {
  const parishes = parishesData.map((parish) => {
    return joinData(parish)
  })

  return parishes
}

function findOne(id: number): iParish {
  const parish = parishesData.find((state) => state.id === id)

  if (!parish) {
    throw createErr('The State Id isn´t correct', 'Not Found', 404)
  }
  return joinData(parish)
}

function joinData(parish: iSimpleParish) {
  const municipality = getMunicipalityInfo(parish.municipalityId)
  const state = getStateInfo(municipality.stateId)

  return {
    ...parish,
    municipality,
    state,
  }
}

export default { find, findOne, joinData }
