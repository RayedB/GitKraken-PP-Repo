const appartmentRepository = require('./appartmentRepository')
const Appartment = require('./appartment')
const axios = require('axios')
const nock = require('nock')

describe('Appartment Component', () => {
    test("Show all appartments", () => {
        // Given
        Appartment.list = jest.fn().mockReturnValue([{
        "id": 2,
        "address": "11 Avenue Foch",
        "city": "Paris"
    }])
        // When
        const appartments = appartmentRepository.list()
        // Then
        console.log(appartments)
        expect(Array.isArray(appartments)).toBeTruthy()

    })
})

describe('Appartment Feature - Integration test', () => {
    test('Show all appartments from DB', async () => {
        // Given

        // When
        const response = await axios.get('http://localhost:8080/appartments')
        const appartments = response.data
        // Then
        expect(Array.isArray(appartments)).toBeTruthy() 

    });
    test('Show appertment + Tenant', async () => {
        // Given
        const call = nock('https://swapi.co').get('/api/people/1/').reply(200,{data:{name:"Yoda"}})
        // When
        const response = await appartmentRepository.get(1)
        console.log(response)
        // Then
        expect(call.isDone()).toBeTruthy()
       

    })
})
