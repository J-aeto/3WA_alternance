let numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];


let newNumbers = numbers.map(num => !(num % 2) && num * 3 || num * 5 )

console.log(newNumbers)