
const STRING = '8790:bonjour le monde:8987:7777:Hello World:9007';
const DIFF_DIGIT = new Set(STRING.match(/[0-9]/g))

let digitCount = {};

for(const DIGIT of DIFF_DIGIT) {
    const RE = new RegExp(DIGIT, 'g')
    digitCount[DIGIT] = (STRING.match(RE)).length
}
console.log(digitCount)