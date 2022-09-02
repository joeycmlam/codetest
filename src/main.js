import {Solution} from './Solution.js'
import log4js from "log4js";


const logger = log4js.getLogger();

function main() {
    logger.level = "debug";
    const sln = new Solution();
    // let result = sln.multiply(1, 9)

    let result= [];
    let input = [1, 2, 3, 4, 5];
    let target = 9;
    result = sln.twoSum(input, target)
    logger.info(`intput = ${input} target = ${target}`);
    logger.info(`result = ${result}`)
}

main();


