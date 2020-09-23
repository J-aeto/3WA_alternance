const message = "Bonjour tout le monde, vive JS !";

function stringWordLength(messageToTest) {
    const wordLength = messageToTest
                                .replace(/,/g,'')
                                .split(' ')
                                .filter(word => !['.','!',','].includes(word))
                                .map(Word => Word.length)
    return wordLength
}



console.log(stringWordLength(message))