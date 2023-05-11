import {
  loadCities,
  loadMunicipalities,
  loadParishes,
  loadStates,
} from '@/libs/loadLocations'

import createErr from '@/utils/createErr'

import { iState, tStateId } from '@/utils/interfaces/state'

// const locations: Estado[] = loadLocations()
const statesData = loadStates()
const citiesData = loadCities()
const municipalitiesData = loadMunicipalities()
const parishesData = loadParishes()

function getParishesByMunicipalityId(municipalityId: number) {
  return parishesData.filter(
    (parish) => parish.municipalityId === municipalityId,
  )
}

function getMunicipalitiesByStateId(stateId: number) {
  return municipalitiesData.filter(
    (municipality) => municipality.stateId === stateId,
  )
}

function getCitiesByStateId(stateId: number) {
  return citiesData.filter((city) => city.stateId === stateId)
}

function find(): iState[] {
  return statesData.map((state) => {
    const cities = getCitiesByStateId(state.id)
    const citiesId = cities.map(({ id }) => id)

    const municipalities = getMunicipalitiesByStateId(state.id)
    const municipalitiesId = municipalities.map(({ id }) => id)

    // return ({
    //   ...state,
    //   cities: getCitiesByStateId(state.id),
    //   municipalities: getMunicipalitiesByStateId(state.id).map(
    //     (municipality) => ({
    //       ...municipality,
    //       parishes: getParishesByMunicipalityId(municipality.id),
    //     }),
    //   ),
    // })

    return {
      ...state,
      cities: citiesId,
      municipalities: municipalitiesId,
    }
  })
}

function findOne(id: tStateId): iState {
  const state = statesData.find((state) => state.id === id)

  if (!state) {
    throw createErr('The State Id isn´t correct', 'Not Found', 404)
  }

  const cities = getCitiesByStateId(state.id)
  const citiesId = cities.map(({ id }) => id)

  const municipalities = getMunicipalitiesByStateId(state.id)
  const municipalitiesId = municipalities.map(({ id }) => id)

  // return {
  //   ...state,
  //   cities: getCitiesByStateId(state.id),
  //   municipalities: getMunicipalitiesByStateId(state.id).map(
  //     (municipality) => ({
  //       ...municipality,
  //       parishes: getParishesByMunicipalityId(municipality.id),
  //     }),
  //   ),
  // }

  return {
    ...state,
    cities: citiesId,
    municipalities: municipalitiesId,
  }
}

export function getStateInfo(stateId: tStateId) {
  const state = statesData.find(({ id }) => id === stateId)

  if (!state) {
    throw createErr('The State Id isn´t correct', 'Not Found', 404)
  }

  const cities = getCitiesByStateId(state.id)
  const municipalities = getMunicipalitiesByStateId(state.id).map(
    (municipality) => ({
      ...municipality,
      parishes: getParishesByMunicipalityId(municipality.id),
    }),
  )

  return {
    ...state,
    cities,
    municipalities,
  }
}

export default {
  find,
  findOne,
  getParishesByMunicipalityId,
  getMunicipalitiesByStateId,
  getCitiesByStateId,
}
