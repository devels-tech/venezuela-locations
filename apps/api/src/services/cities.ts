import {
  loadCities,
  loadMunicipalities,
  loadParishes,
  loadStates,
} from '@/libs/loadLocations'

import createErr from '@/utils/createErr'
import { iCity, iStateForCity } from '@/utils/interfaces/city'

const statesData = loadStates()
const citiesData = loadCities()
const municipalitiesData = loadMunicipalities()
const parishesData = loadParishes()

function find(): iCity[] {
  const cities = citiesData.map((city) => {
    let stateFromCity = {}

    statesData.forEach((state) => {
      // Get states
      if (state.id === city.stateId) {
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

        stateFromCity = {
          ...state,
          municipalities: municipalitiesFromState,
        }
      }
    })

    return {
      ...city,
      state: stateFromCity,
    }
  })

  return cities as iCity[]
}

function findOne(id: number): iCity {
  const city = citiesData.find((city) => city.id === id)

  if (!city) {
    throw createErr('The City Id isn´t correct', 'Not Found', 404)
  }

  let stateFromCity = {}

  statesData.forEach((state) => {
    // Get states
    if (state.id === city.stateId) {
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

      stateFromCity = {
        ...state,
        municipalities: municipalitiesFromState,
      }
    }
  })

  const fullCity = {
    ...city,
    state: stateFromCity as iStateForCity,
  }

  return fullCity
}

export default { find, findOne }
