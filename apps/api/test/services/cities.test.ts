import createErr from '@/utils/createErr'
import Cities from '@/services/cities'

describe('Test City functions', () => {
  // it('should return all cities for a given state id', () => {
  //   const stateId = 1
  //   const cities = Cities.getCitiesFromState(stateId)
  //   expect(cities).toHaveLength(3)
  // })

  // it('should return all municipalities with parishes for a given state id', () => {
  //   const stateId = 1
  //   const municipalities = Cities.getMunicipalitiesFromState(stateId)
  //   expect(municipalities).toHaveLength(7)
  //   expect(municipalities[0].parishes).toHaveLength(5)
  // })

  // it('should return all parishes for a given municipality id', () => {
  //   const municipalityId = 1
  //   const parishes = Cities.getParishesFromMunicipality(municipalityId)
  //   expect(parishes).toHaveLength(5)
  // })

  // it('should return the correct state by id', () => {
  //   const stateId = 1
  //   const state = Cities.getStateById(stateId)

  //   expect(state).toMatchObject({ id: 1, name: 'Amazonas' })
  // })

  // it('should throw an error if the state id is incorrect', () => {
  //   const id = 0

  //   const stateById = Cities.getStateById(id)

  //   expect(stateById).toBeNull()
  // })

  it('should return all cities with associated state, municipalities and parishes', () => {
    const cities = Cities.find()

    expect(cities).toHaveLength(498)
    expect(cities[0]).toMatchObject({
      id: 1,
      name: 'Maroa',
      state: {
        id: 1,
        name: 'Amazonas',
        cities: expect.any(Array),
        municipalities: expect.any(Array),
      },
    })
  })

  it('should return a city with associated state, municipalities and parishes by id', () => {
    const cityId = 1
    const city = Cities.findOne(cityId)
    expect(city).toMatchObject({
      id: 1,
      name: 'Maroa',
      state: {
        id: 1,
        name: 'Amazonas',
        cities: expect.any(Array),
        municipalities: expect.any(Array),
      },
    })
  })

  it('should throw an error if the city id is incorrect', () => {
    const cityId = 0
    expect(() => {
      Cities.findOne(cityId)
    }).toThrow('The City Id isn´t correct')
  })

  it('should throw an error if the city id is incorrect', () => {
    expect(() => {
      Cities.findOne(999)
    }).toThrow('The City Id isn´t correct')
  })

  // it('should throw an error if the state id is incorrect', () => {
  //   expect(() => {
  //     Cities.findOne(2)
  //   }).toThrow('The State Id isn´t correct')
  // })
})
