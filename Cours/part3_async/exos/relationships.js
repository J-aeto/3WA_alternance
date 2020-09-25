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

Promise.all([readJsonFile('./dragons.json'), readJsonFile('./relationships.json')])
.then(data => {
    const { dragons } = data[0];
    const { relationships } = data[1];
    
    let relations = new Map();
    for(const {id, name} of dragons) {
        const idDragon = id
        for(const {id, relation} of relationships) {
            if (idDragon === id) {
                relations.set(name, relation);
            }
        }
    }
    console.log(relations)
})