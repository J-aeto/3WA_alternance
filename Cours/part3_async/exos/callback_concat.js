const messageConcat = (message, callback) => {
    setTimeout(() => {
        callback(message);
    }, 1000);
}

messageConcat("Hello", word => {
    messageConcat(`${word} World !`, message => console.log(message))
})