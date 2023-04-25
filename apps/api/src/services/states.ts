import { Estado, idEstado } from '@/utils/interfaces/location'
import {
  loadCities,
  loadMunicipalities,
  loadParishes,
  loadStates,
} from '@/libs/loadLocations'
import createErr from '@/utils/createErr'

// const locations: Estado[] = loadLocations()
const statesData = loadStates()
const citiesData = loadCities()
const municipalitiesData = loadMunicipalities()
const parishesData = loadParishes()

function find() {
  const states = statesData.map(state => {
    const citiesFromState = citiesData.filter(city => city.stateId === state.id) // Get cities

    const municipalitiesFromState = []
    municipalitiesData.forEach(municipality => { // Get municipalities
      if (municipality.stateId === state.id) {
        const parishesFromMunicipality = parishesData.filter(parish => { // Get parishes
          return parish.municipalityID === municipality.id
        })

        municipalitiesFromState.push({
          ...municipality,
          parishes: parishesFromMunicipality
        })
      }
    })

    return ({
      ...state,
      cities: citiesFromState,
      municipalities: municipalitiesFromState,
    })
  })

  return states
}

function findOne(id: idEstado) {
  const state = statesData.find((state) => state.id === id)

  if (!state) {
    throw createErr('The State Id isn´t correct', 'Not Found', 404)
  }

  const citiesFromState = citiesData.filter(city => city.stateId === state.id) // Get cities

  const municipalitiesFromState = []
  municipalitiesData.forEach(municipality => { // Get municipalities
    if (municipality.stateId === state.id) {
      const parishesFromMunicipality = parishesData.filter(parish => { // Get parishes
        return parish.municipalityID === municipality.id
      })

      municipalitiesFromState.push({
        ...municipality,
        parishes: parishesFromMunicipality
      })
    }
  })

  state.cities = citiesFromState
  state.municipalities = municipalitiesFromState

  return state
}

export default { find, findOne }
