const Solution = require('./solution');
const log4js = require('log4js');
const Greeter = require('./greeter');
const calculator = require('./calculator');

const logger = log4js.getLogger();

function testCal() {

    const a = 1;
    const b = 2;
    const cal = new calculator(a, b);
    cal.addNumber();
    const result = cal.getResult();
    logger.info(`${a} + ${b} = ${result}`);

}

function test() {

    const msg = new Greeter().sayHello();
    logger.info(msg);
}

function challenge() {
    const sln = new Solution();
    // let result = sln.multiply(1, 9)

    let result= [];
    let input = [2, 4, 6,  5, 3, 1];
    let target = 7;
    result = sln.twoSumAlgo(input, target)
    logger.info(`intput = ${input} target = ${target}`);
    logger.info(`result = ${result}`)
}

function main() {
    logger.level = "debug";
    challenge();
    // test();
    // testCal();
}

main();


