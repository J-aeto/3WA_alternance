let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// retourne la première valeur du tableau en la supprimant du tableau
// numbers.shift();

function accumulator(numbers, acc = 0 ){

    
    // Une condition d'arrêt et retourner la somme des valeurs du tableau
    if (numbers.length == 0 ) return acc;
    
    
    acc = acc + numbers.shift();
    
    // dans la fonction on ré-appelle la fonction elle-même
    return accumulator(numbers, acc);
    
    

}

console.log(accumulator(numbers)); // doit retourner 55