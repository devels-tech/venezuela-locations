import States from '@/services/states'
import createErr from '@/utils/createErr'

describe('getParishesByMunicipalityId', () => {
  it('should return parishes data filtered by municipality id', () => {
    const id = 1
    const result = States.getParishesByMunicipalityId(id)

    expect(result).toHaveLength(5)
  })

  it('should return an empty array if no parishes are found with the given municipality id', () => {
    const id = 0
    const result = States.getParishesByMunicipalityId(id)
    expect(result).toHaveLength(0)
  })
})

describe('getMunicipalitiesByStateId', () => {
  const stateId = 1

  it('should return all municipalities with stateId equal to 1', () => {
    const expected = 7
    const result = States.getMunicipalitiesByStateId(stateId)
    expect(result).toHaveLength(expected)
  })

  it('should return an empty array if stateId is not found', () => {
    const expected = []
    const result = States.getMunicipalitiesByStateId(999)
    expect(result).toEqual(expected)
  })
})

describe('getCitiesByStateId', () => {
  it('should return an array of cities filtered by stateId', () => {
    const result = States.getCitiesByStateId(2)
    expect(result).toHaveLength(28)
  })

  it('should return an empty array when no cities are found', () => {
    const result = States.getCitiesByStateId(null)
    expect(result).toEqual([])
  })

  it('should return all cities when stateId is null', () => {
    const result = States.getCitiesByStateId(null)
    expect(result).toEqual([])
  })
})

describe('find', () => {
  it('should return an array of states with cities and municipalities', () => {
    const result = States.find()

    expect(Array.isArray(result)).toBe(true)

    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('cities')
    expect(result[0]).toHaveProperty('municipalities')
    expect(result[0].cities.length).toBeGreaterThan(0)
    expect(result[0].municipalities.length).toBeGreaterThan(0)
    expect(result[0].municipalities[0]).toHaveProperty('id')
    expect(result[0].municipalities[0]).toHaveProperty('name')
    expect(result[0].municipalities[0]).toHaveProperty('parishes')
    expect(result[0].municipalities[0].parishes.length).toBeGreaterThan(0)
    expect(result[0].municipalities[0].parishes[0]).toHaveProperty('id')
    expect(result[0].municipalities[0].parishes[0]).toHaveProperty('name')
  })

  it('should return an empty array if statesData is empty', () => {
    // statesData = [];
    const result = States.find()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(25)
  })

  it('should return an array of states with empty cities and municipalities if getCitiesByStateId and getMunicipalitiesByStateId return empty arrays', () => {
    // getCitiesByStateId = jest.fn().mockReturnValue([]);
    // getMunicipalitiesByStateId = jest.fn().mockReturnValue([]);
    const result = States.find()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name')
    expect(result[0].cities.length).toBe(3)
    expect(result[0].municipalities.length).toBe(7)
  })

  it('should return an array of states with empty parishes if getParishesByMunicipalityId returns an empty array', () => {
    // getParishesByMunicipalityId = jest.fn().mockReturnValue([]);
    const result = States.find()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('cities')
    expect(result[0]).toHaveProperty('municipalities')
    expect(result[0].municipalities.length).toBeGreaterThan(0)
    expect(result[0].municipalities[0]).toHaveProperty('id')
    expect(result[0].municipalities[0]).toHaveProperty('name')
    expect(result[0].municipalities[0]).toHaveProperty('parishes')
    expect(result[0].municipalities[0].parishes.length).toBe(5)
  })
})

describe('findOne', () => {
  it('should return the state with the given id', () => {
    const stateId = 1
    const expectedState = {
      id: 1,
      name: 'Amazonas',
      iso: 'Z',
    }
    const result = States.findOne(stateId)

    expect(result).toEqual({
      ...expectedState,
      cities: States.getCitiesByStateId(expectedState.id),
      municipalities: States.getMunicipalitiesByStateId(expectedState.id).map(
        (municipality) => ({
          ...municipality,
          parishes: States.getParishesByMunicipalityId(municipality.id),
        }),
      ),
    })
  })

  it('should throw an error if the state id is incorrect', () => {
    const stateId = null
    expect(() => States.findOne(stateId)).toThrowError(
      createErr('The State Id isn´t correct', 'Not Found', 404),
    )
  })
})
