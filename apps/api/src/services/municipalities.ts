import { loadMunicipalities, loadParishes } from '@/libs/loadLocations'

import createErr from '@/utils/createErr'

import {
  Municipality,
  iSimpleMunicipality,
} from '@/utils/interfaces/municipality'

import { getStateInfo } from './states'

const municipalitiesData = loadMunicipalities()
const parishesData = loadParishes()

function find(): Municipality[] {
  const municipalities = municipalitiesData.map((municipality) =>
    joinData(municipality),
  )

  return municipalities as unknown as Municipality[]
}

function findOne(id: number): Municipality {
  const municipality = municipalitiesData.find((state) => state.id === id)

  if (!municipality) {
    throw createErr('The Municipality Id isn´t correct', 'Not Found', 404)
  }

  return joinData(municipality) as unknown as Municipality
}

function joinData(municipality: iSimpleMunicipality) {
  const state = getStateInfo(municipality.stateId)

  const parishes = parishesData.filter(
    ({ municipalityId }) => municipalityId === municipality.id,
  )

  return {
    ...municipality,
    state,
    parishes,
  }
}

export function getMunicipalityInfo(municipalityId: number) {
  const municipality = municipalitiesData.find(
    ({ id }) => id === municipalityId,
  )

  if (!municipality) {
    throw createErr('The Municipality Id isn´t correct', 'Not Found', 404)
  }

  const parishes = parishesData.filter(
    ({ municipalityId }) => municipalityId === municipality.id,
  )

  return {
    ...municipality,
    parishes,
  }
}

export default { find, findOne, getMunicipalityInfo }
