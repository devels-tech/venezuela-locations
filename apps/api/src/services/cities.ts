import {
  loadCities,
  loadMunicipalities,
  loadParishes,
  loadStates,
} from '@/libs/loadLocations'

import createErr from '@/utils/createErr'
import { iSimpleCity } from '@/utils/interfaces/city'
import { iMunicipalityWithParishes } from '@/utils/interfaces/municipality'

const statesData = loadStates()
const citiesData = loadCities()
const municipalitiesData = loadMunicipalities()
const parishesData = loadParishes()

// function getCitiesFromState(stateId: number): iSimpleCity[] {
//   const citiesFromState = citiesData.filter((city) => city.stateId === stateId)
//   return citiesFromState
// }

// function getMunicipalitiesFromState(
//   stateId: number,
// ): iMunicipalityWithParishes[] {
//   const municipalitiesFromState = municipalitiesData.filter(
//     (municipality) => municipality.stateId === stateId,
//   )

//   return municipalitiesFromState.map((municipality) => ({
//     ...municipality,
//     parishes: getParishesFromMunicipality(municipality.id),
//   }))
// }

// function getParishesFromMunicipality(municipalityId: number) {
//   return parishesData.filter(
//     (parish) => parish.municipalityId === municipalityId,
//   )
// }

// function getStateById(stateId: number) {
//   const state = statesData.find((state) => state.id === stateId)

//   return state ? { ...state } : null
// }

function find() {
  // const cities = citiesData.map((city) => {
  //   const state = getStateById(city.stateId)

  //   if (!state) {
  //     throw createErr('The State Id isn´t correct', 'Not Found', 404)
  //   }

  //   return {
  //     ...city,
  //     state: {
  //       ...state,
  //       cities: getCitiesFromState(state.id),
  //       municipalities: getMunicipalitiesFromState(state.id),
  //     },
  //   }
  // })

  // return cities as unknown as iCity[]
  return citiesData
}

function findOne(id: number) {
  const city = citiesData.find((city) => city.id === id)

  if (!city) {
    throw createErr('The City Id isn´t correct', 'Not Found', 404)
  }

  // const state = getStateById(city.stateId)

  // if (!state) {
  //   throw createErr('The State Id isn´t correct', 'Not Found', 404)
  // }

  // return {
  //   ...city,
  //   state: {
  //     ...state,
  //     cities: getCitiesFromState(state.id),
  //     municipalities: getMunicipalitiesFromState(state.id),
  //   },
  // }

  return city
}

export default {
  find,
  findOne,
  // getCitiesFromState,
  // getMunicipalitiesFromState,
  // getParishesFromMunicipality,
  // getStateById,
}
