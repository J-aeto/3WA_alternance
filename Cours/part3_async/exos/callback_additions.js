const add = (number, callback) => {
    setTimeout(() => {
        callback(number, () => console.log("ce n'est pas un nombre"))
    }, 1000);
}

const test = add(1, (number, error) => isNaN(number) ? error() : console.log(number + 2))
