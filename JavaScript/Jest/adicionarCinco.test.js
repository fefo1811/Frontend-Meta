const { default: TestRunner } = require('jest-runner')
const adicionarCinco = require('./adicionarCinco')

test('Retorna o valor adicionado somado com o numero 5', () => {
    expect(adicionarCinco(5)).toBe(10)
})