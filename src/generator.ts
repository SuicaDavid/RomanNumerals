import RomanNumeralGenerator from "./romanNumeralGenerator";

export default class Generator implements RomanNumeralGenerator {
    minNumber = 1
    maxNumber = 3999
    keys = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    generate(number: number): string {
        if (!Number.isInteger(number)) {
            return null
        }

        if (number < this.minNumber || number > this.maxNumber) {
            return null
        }

        let romanNumerals = ""
        for (let symbol in this.keys) {
            let symbolValue = this.keys[symbol]
            if (symbolValue <= number) {
                let coefficient = Math.floor(number / symbolValue)
                romanNumerals += symbol.repeat(coefficient)
                number = number - symbolValue * coefficient
            }
        }
        return romanNumerals
    }
}