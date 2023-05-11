import Parishes from '@/services/parishes'
import { iSimpleParish } from '@/utils/interfaces/parish'

describe('find', () => {
  it('should return an array of parishes', () => {
    const result = Parishes.find()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('municipality')
    expect(result[0]).toHaveProperty('state')
  })
})

describe('findOne', () => {
  it('should return a parish with the given id', () => {
    const result = Parishes.findOne(1)
    expect(result).toHaveProperty('id', 1)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('municipality')
    expect(result).toHaveProperty('state')
  })

  it('should throw an error if the id is not found', () => {
    expect(() => {
      Parishes.findOne(0)
    }).toThrow('The State Id isn´t correct')
  })
})

describe('joinData', () => {
  it('should return a parish with municipality and state info', () => {
    const parish: iSimpleParish = {
      id: 1,
      name: 'Parish 1',
      municipalityId: 1,
      coordinates: {
        lat: 10.0151271,
        lng: -66.6880691,
      },
    }
    const result = Parishes.joinData(parish)

    expect(result).toHaveProperty('id', 1)
    expect(result).toHaveProperty('name', 'Parish 1')
    expect(result).toHaveProperty('municipality')

    expect(result.municipality).toHaveProperty('id', 1)
    expect(result.municipality).toHaveProperty('name')
    expect(result.municipality).toHaveProperty('stateId')

    expect(result).toHaveProperty('state')
    expect(result.state).toHaveProperty('id')
    expect(result.state).toHaveProperty('name')
  })
})
