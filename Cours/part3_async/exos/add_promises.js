const add = number => ( new Promise((resolve, reject) => {
    setTimeout(() => {
        isNaN(number) ? 
                    reject(new Error('not a number ...')) : 
                    resolve(number);
    }, 300);
    })
);

add(1)
.then( number => add(number + 2)).then( showResult => console.log(showResult))
.catch( err => console.error(err))