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

function find(): iState[] {
  const states = statesData.map((state) => {
    const citiesFromState = citiesData.filter(
      (city) => city.stateId === state.id,
    ) // Get cities

    const municipalitiesFromState = []
    municipalitiesData.forEach((municipality) => {
      // Get municipalities
      if (municipality.stateId === state.id) {
        const parishesFromMunicipality = parishesData.filter((parish) => {
          // Get parishes
          return parish.municipalityId === municipality.id
        })

        municipalitiesFromState.push({
          ...municipality,
          parishes: parishesFromMunicipality,
        })
      }
    })

    return {
      ...state,
      cities: citiesFromState,
      municipalities: municipalitiesFromState,
    }
  })

  return states
}

function findOne(id: tStateId): iState {
  const state = statesData.find((state) => state.id === id)

  if (!state) {
    throw createErr('The State Id isn´t correct', 'Not Found', 404)
  }

  const citiesFromState = citiesData.filter((city) => city.stateId === state.id) // Get cities

  const municipalitiesFromState = []
  municipalitiesData.forEach((municipality) => {
    // Get municipalities
    if (municipality.stateId === state.id) {
      const parishesFromMunicipality = parishesData.filter((parish) => {
        // Get parishes
        return parish.municipalityId === municipality.id
      })

      municipalitiesFromState.push({
        ...municipality,
        parishes: parishesFromMunicipality,
      })
    }
  })

  // state.cities = citiesFromState
  // state.municipalities = municipalitiesFromState

  const fullState: iState = {
    ...state,
    cities: citiesFromState,
    municipalities: municipalitiesFromState,
  }

  return fullState
}

export function getStateInfo(stateId: tStateId) {
  const state = statesData.find(({ id }) => id === stateId)
  const cities = citiesData.filter(({ stateId }) => stateId === state.id)

  const municipalitiesByState = municipalitiesData.filter(
    ({ stateId }) => stateId === state.id,
  )

  const municipalities = municipalitiesByState.map((municipality) => {
    const parishes = parishesData.filter(
      ({ municipalityId }) => municipalityId === municipality.id,
    )

    return {
      ...municipality,
      parishes,
    }
  })

  return {
    ...state,
    cities,
    municipalities,
  }
}

export default { find, findOne }
