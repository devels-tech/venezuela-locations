export const dummyCodeInput = `
const API_URL = 'https://locations-venezuela.com/api'

const state = 'caracas'
const municipalities = 'libertador'
const zones = 'all' // or '*'

const res = await fetch(\`\${API_URL}/locations?state=\${state}&\municipalities=\${municipalities}zones=\${zones}\`)
const data = await res.json()

console.log(data)`

export const dummyCodeOutput = `[
  {
    "id": 24,
    "state": "Distrito Capital",
    "capital": "Caracas",
    "municipalities": [
      {
        "id": 42
        "municipality": "Libertador",
        "zones": [
          {
            "id": 109,
            "label": "23 de enero",
            "name": "23_DE_ENERO"
          },
          {
            "id": 314,
            "label": "Altagracia",
            "name": "ALTAGRACIA"
          },
          {
            "id": 998,
            "label": "Antímano",
            "name": "ANTIMANO"
          },
          {
            "id": 267,
            "label": "Caricuao",
            "name": "CARICUAO"
          },
          {
            "id": 456,
            "label": "Catedral",
            "name": "CATEDRAL"
          },
          {
            "id": 743,
            "label": "Coche",
            "name": "COCHE"
          },
          {
            "id": 125,
            "label": "El Junquito",
            "name": "EL_JUNQUITO"
          },
          {
            "id": 654,
            "label": "El Paraíso",
            "name": "EL_PARAISO"
          },
          {
            "id": 986,
            "label": "El Recreo",
            "name": "EL_RECREO"
          },
          {
            "id": 345,
            "label": "El Valle",
            "name": "EL_VALLE"
          },
          {
            "id": 731,
            "label": "Candelaria",
            "name": "CANDELARIA"
          },
          {
            "id": 238,
            "label": "La Pastora",
            "name": "LA_PASTORA"
          },
          {
            "id": 567,
            "label": "La Vega",
            "name": "LA_VEGA"
          },
          {
            "id": 432,
            "label": "Macarao",
            "name": "MACARAO"
          },
          {
            "id": 888,
            "label": "San Agustín",
            "name": "SAN_AGUSTIN"
          },
          {
            "id": 777,
            "label": "San Bernardino",
            "name": "SAN_BERNARDINO"
          },
          {
            "id": 555,
            "label": "San José",
            "name": "SAN_JOSE"
          },
          {
            "id": 222,
            "label": "San Juan",
            "name": "SAN_JUAN"
          },
          {
            "id": 999,
            "label": "San Pedro",
            "name": "SAN_PEDRO"
          },
          {
            "id": 111,
            "label": "Santa Rosalía",
            "name": "SANTA_ROSALIA"
          },
          {
            "id": 333,
            "label": "Santa Teresa",
            "name": "SANTA_TERESA"
          },
          {
            "id": 444,
            "label": "Sucre (Catia)",
            "name": "SUCRE_(CATIA)"
          }
        ]
      }
    ]
  }
]`