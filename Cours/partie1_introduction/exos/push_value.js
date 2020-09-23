const strNumbers = [];
const str1 = ['one', 'two'];
const str2 = ['three', 'four'];

strNumbers.push( ...str1, ...str2)

console.log(strNumbers)