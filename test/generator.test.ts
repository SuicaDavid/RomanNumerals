import Generator from '../src/generator'
import RomanNumeralGenerator from '../src/romanNumeralGenerator'

function checkNumber(input, expectedNumber) {
    const generator = new Generator()
    const generatedNumber = generator.generate(input)
    expect(generatedNumber).toEqual(expectedNumber)
}

describe('Test input', () => {
    test('Input String', () => {
        const input = 'A', expectedNumber = null
        checkNumber(input, expectedNumber)
    })

    test('Input String number', () => {
        const input = '1', expectedNumber = null
        checkNumber(input, expectedNumber)
    })

    test('Input not integer', () => {
        const input = 1.5, expectedNumber = null
        checkNumber(input, expectedNumber)
    })


    test('Input Object', () => {
        const input = {}, expectedNumber = null
        checkNumber(input, expectedNumber)
    })

    test('Input a list of data', () => {
        const input = [1, 2, 3], expectedNumber = null
        checkNumber(input, expectedNumber)
    })

    test('Input NaN', () => {
        const input = NaN, expectedNumber = null
        checkNumber(input, expectedNumber)
    })

    test('Input less than limitation', () => {
        const input = 0, expectedNumber = null
        checkNumber(input, expectedNumber)
    })

    test('Input more than limitation', () => {
        const input = 4000, expectedNumber = null
        checkNumber(input, expectedNumber)
    })
})

describe('Test general number', () => {
    test('Generate 1', () => {
        const input = 1, expectedNumber = 'I'
        checkNumber(input, expectedNumber)
    })


    test('Generate 2', () => {
        const input = 2, expectedNumber = 'II'
        checkNumber(input, expectedNumber)
    })

    test('Generate 3', () => {
        const input = 3, expectedNumber = 'III'
        checkNumber(input, expectedNumber)
    })

    test('Generate 4', () => {
        const input = 4, expectedNumber = 'IV'
        checkNumber(input, expectedNumber)
    })

    test('Generate 5', () => {
        const input = 5, expectedNumber = 'V'
        checkNumber(input, expectedNumber)
    })

    test('Generate 6', () => {
        const input = 6, expectedNumber = 'VI'
        checkNumber(input, expectedNumber)
    })

    test('Generate 7', () => {
        const input = 7, expectedNumber = 'VII'
        checkNumber(input, expectedNumber)
    })
    test('Generate 8', () => {
        const input = 8, expectedNumber = 'VIII'
        checkNumber(input, expectedNumber)
    })
    test('Generate 9', () => {
        const input = 9, expectedNumber = 'IX'
        checkNumber(input, expectedNumber)
    })
    test('Generate 10', () => {
        const input = 10, expectedNumber = 'X'
        checkNumber(input, expectedNumber)
    })

    test('Generate 20', () => {
        const input = 20, expectedNumber = 'XX'
        checkNumber(input, expectedNumber)
    })
    test('Generate 39', () => {
        const input = 39, expectedNumber = 'XXXIX'
        checkNumber(input, expectedNumber)
    })
    test('Generate 246', () => {
        const input = 246, expectedNumber = 'CCXLVI'
        checkNumber(input, expectedNumber)
    })
    test('Generate 789', () => {
        const input = 789, expectedNumber = 'DCCLXXXIX'
        checkNumber(input, expectedNumber)
    })
    test('Generate 2021', () => {
        const input = 2021, expectedNumber = 'MMXXI'
        checkNumber(input, expectedNumber)
    })
    test('Generate 2421', () => {
        const input = 2421, expectedNumber = 'MMCDXXI'
        checkNumber(input, expectedNumber)
    })
    test('Generate 3999', () => {
        const input = 3999, expectedNumber = 'MMMCMXCIX'
        checkNumber(input, expectedNumber)
    })
})