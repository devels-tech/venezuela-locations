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
  const cities = citiesData.map(city => {
    let stateFromCity = {}
    statesData.forEach(state => {  // Get states
      if (state.id === city.stateId) {
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

        stateFromCity = {
          ...state,
          municipalities: municipalitiesFromState,
        }
      }
    })

    return ({
      ...city,
      state: stateFromCity,
    })
  })

  return cities
}

function findOne(id: number) { // TODO: TYPE
  const city = citiesData.find((city) => city.id === id)

  if (!city) {
    throw createErr('The City Id isn´t correct', 'Not Found', 404)
  }

  let stateFromCity = {}
  statesData.forEach(state => {  // Get states
    if (state.id === city.stateId) {
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

      stateFromCity = {
        ...state,
        municipalities: municipalitiesFromState,
      }
    }
  })

  city.state = stateFromCity

  return city
}

export default { find, findOne }
