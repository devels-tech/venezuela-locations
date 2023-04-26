import { loadParishes } from '@/libs/loadLocations'

const parishesData = loadParishes()

function find() {
  // parishesData.map((parish)=>{
  //   parish.municipalityId
  // })

  return parishesData
}

function findOne(id: number) {
  return parishesData
}

export default { find, findOne }
