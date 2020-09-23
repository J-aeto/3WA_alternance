class rectangle {
    constructor(heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }

    set h(newHeigth) {
        this.heigth = newHeigth
    }

    set w(newWidth) {
        this.width = newWidth
    }

    get h() {

        return this.heigth
    }

    get w() {

        return this.width
    }

    setPerimeter() {
        return (this.heigth + this.width) * 2;
    }

    setArea() {
        return this.heigth * this.width
    }
}

class square extends rectangle {
    constructor(heigth, weigth) {
        super(weigth, heigth);
    }
}

const mySquare = new square(5, 5);

const mySquareArea = mySquare.setArea();
const mySquarePerimeter = mySquare.setPerimeter();
console.log(mySquare.w);
console.log(mySquare.h);
console.log(mySquareArea, mySquarePerimeter)