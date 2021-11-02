# Solution explain

## Analysis
When I first time saw the requirement, I extract the essential point for development for analysis. It has an interface to implement to convert integer to roman numerals and it has a range of limitations of the input numbers. Also, from the interest of BBC, the unit test is required.

Owing to I am applying for frontend jobs, I decided to use TypeScript to fulfil the requirement or interface. Jest was selected for testing. Following the TDD rules, the test case was written at the beginning.

This program separates the test case into two-part: Testing various inputs and outputs. It has covered a majority of situations that may lead to bugs. If the wrong input was received, the generate is expected to return null.

## Explaination
From my experience of developing an Elvish convertor, it should have key-value pairs to reflect the relation between two various content. Admittedly, it has some regularity that it can be converted by simple pairs like:

```javascript
let keys = {
  V: 5,
  I: 1,
};
```
However, I add the IV key between V and I to simplify the development. In addition, I extract the variable of max and mini number as class members to be shared with other methods which may be extended in the future.


```javascript
export default class Generator implements RomanNumeralGenerator {
  minNumber = 1;
  maxNumber = 3999;
  keys = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  generate(number: number): string {
    if (!Number.isInteger(number)) {
      return null;
    }

    if (number < this.minNumber || number > this.maxNumber) {
      return null;
    }

    let romanNumerals = "";
    for (let symbol in this.keys) {
      let symbolValue = this.keys[symbol];
      if (symbolValue <= number) {
        let coefficient = Math.floor(number / symbolValue);
        romanNumerals += symbol.repeat(coefficient);
        number = number - symbolValue * coefficient;
      }
    }
    return romanNumerals;
  }
}
```
The input number will be checked the usability before the conversion. It will return null if the number is not an integer. The key-value pairs are Descending, so the higher number of digits will be processed first, For that reason, this process can work like Binary conversion. 

Example: 21
- 10 -> X => 21 / 10 = 2 => 2 * X
- 1 -> I
- XXI

A variable called romanNumerals was declared before the loop, each time the if statement was matched, a new roman numerals character was added to this String variable. Finally, this result will be returned after the for a loop.

### Install
If you want to run this program, you should first install the Node.js environment. Run command line in this project path:

```
yarn install
```

Then you can run the program via
```
yarn start
```
Or run all test cases
```
yarn test
```
