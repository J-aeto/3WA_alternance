const add = (number, callback, error) => {
    setTimeout(() => {
        isNaN(number) ? error() : callback(number);
        //callback(number, () => console.log("ce n'est pas un nombre"))
    }, 1000);
}

const test = add(1, (number) => console.log(number + 2), () => console.log("not a number"))
// const test = add(1, (number, error) => isNaN(number) ? error() : console.log(number + 2))
