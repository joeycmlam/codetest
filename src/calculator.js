class Calculator {


    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addNumber () {
        this.result = (this.x + this.y);
    };

    getResult() {
        return this.result;
    }
}

module.exports = Calculator;
