const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';



class Parser {
    constructor(delimiter) {
        this._delimiter = delimiter
        this._str = [];
    }

    get str() {
        return this._str.join(' ')
    }

    parse(string) {
        this._str = string.split(this._delimiter).filter(Number).map(s => s.trim());
    }
}

const p = new Parser(':');
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007