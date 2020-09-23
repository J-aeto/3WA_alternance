const word = "Mississipi";
let wordLetterCount= {};

diffLetters = new Set(word)

//ES5
// for (const letter of diffLetters) {
//     let letterCount = 0;
//     for(const wordLetter of word) {
//         if (wordLetter == letter){
//             letterCount++;
//         }
//     }
//     wordLetterCount[letter] =  letterCount;
// }

// console.log(wordLetterCount)


//RegExp code
for (const letter of diffLetters) {
    const re = new RegExp(letter, 'g')
    wordLetterCount[letter] = (word.match(re)).length
}
console.log(wordLetterCount)