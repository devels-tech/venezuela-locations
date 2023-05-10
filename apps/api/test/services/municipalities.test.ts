import Municipalities from '@/services/municipalities'

describe('getMunicipalityInfo', () => {
  it('should return the correct municipality info', () => {
    const result = Municipalities.getMunicipalityInfo(1)
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('stateId')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('parishes')
  })

  it('should throw an error if the municipality id is incorrect', () => {
    expect(() => Municipalities.getMunicipalityInfo(999)).toThrowError(
      'The Municipality Id isn´t correct',
    )
  })
})

describe('findOne', () => {
  it('should return the correct municipality info', () => {
    const result = Municipalities.findOne(1)
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('stateId')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('state')
    expect(result).toHaveProperty('parishes')
    expect(result.state).toHaveProperty('cities')
  })

  it('should throw an error if the municipality id is incorrect', () => {
    expect(() => Municipalities.findOne(999)).toThrowError(
      'The Municipality Id isn´t correct',
    )
  })
})

describe('find', () => {
  it('should return an array of municipalities with state and parish info', () => {
    const result = Municipalities.find()
    expect(result).toHaveLength(335)
    expect(result[0]).toHaveProperty('state')
    expect(result[0]).toHaveProperty('parishes')
    expect(result[1]).toHaveProperty('state')
    expect(result[1]).toHaveProperty('parishes')
  })
})
