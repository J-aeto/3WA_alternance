const populations = [
    { "id" : 0, "name" : "Alan" },
    { "id" : 1, "name" : "Albert" },
    { "id" : 2, "name" : "Jhon" },
    { "id" : 3, "name" : "Brice" },
    { "id" : 4, "name" : "Alexendra" },
    { "id" : 5, "name" : "Brad" },
    { "id" : 6, "name" : "Carl" },
    { "id" : 7, "name" : "Dallas" },
    { "id" : 8, "name" : "Dennis" },
    { "id" : 9, "name" : "Edgar" },
    { "id" : 10, "name" : "Erika" },
    { "id" : 11, "name" : "Isaac" },
    { "id" : 12, "name" : "Ian" }
];

const REGROUP_NAME_LENGTH = 5;
let newPopulations = [];


// tri du tableau en fonction de la longueur des noms
populations.sort((a, b) => {
    return a.name.length - b.name.length;
})

console.log(populations)


// ajout d'une clé lenName qui definit la longueur de chaque nom
for(population of populations) {
    const newPopulation = { ...population, "lenName" : population.name.length}
    newPopulations.push(newPopulation);
}

console.log(newPopulations)


// fonction qui regroup les personnes en fonction de la taille de leur nom
function regroupNameByLength(populations, lengthRegroup) {
    let regroupName = [];
    for (population of populations) {
        const {lenName} = population;
        if (lenName == lengthRegroup) {
            regroupName.push(population)
        }
    }
    return regroupName;
}

const regroupName = regroupNameByLength(newPopulations, REGROUP_NAME_LENGTH)

console.log(regroupName);