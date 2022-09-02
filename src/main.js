import {Solution} from './Solution.js'
import log4js from "log4js";


const logger = log4js.getLogger();

function main() {
    logger.level = "debug";
    const sln = new Solution();
    // let result = sln.multiply(1, 9)

    let result= [];
    let input = [2, 4, 6,  5, 3, 1];
    let target = 7;
    result = sln.twoSumAlgo(input, target)
    logger.info(`intput = ${input} target = ${target}`);
    logger.info(`result = ${result}`)
}

main();


