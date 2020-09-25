const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const readJsonFile = file => (new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            reject(new Error("File read failed:"))
            return;
        }
        resolve(JSON.parse(data)) 
    })
}))



const dataDragon = readJsonFile('./dragons.json')
.then(data => {
    const {dragons} = data
    let ages = [];
    
    [...dragons].reduce((acc, curr) => ages.push(curr.age))
    let mostOlder = dragons.filter(dragon => dragon.age === Math.max(...ages))
    let lessOlder = dragons.filter(dragon => dragon.age === Math.min(...ages))
    dragons.sort((a, b) => b.age - a.age)

    return {mostOlder, lessOlder, dragons}
} )
.then(dragon => console.log(dragon))
.catch( err => console.error(err))
