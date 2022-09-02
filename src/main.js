import {Solution} from './Solution.js'
import log4js from "log4js";


const logger = log4js.getLogger();

function main() {
    logger.level = "debug";
    const sln = new Solution(1, 9);
    let result = sln.twoSum()
    console.log(`result = ${result}`)
    logger.info(`result = ${result}`)
}

main();


