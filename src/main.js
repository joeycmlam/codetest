import {Solution} from './Solution.js'
import log4js from "log4js";


const logger = log4js.getLogger();

function main() {
    logger.level = "debug";
    const sln = new Solution();
    let result = sln.multiply(1, 9)
    console.log(`result = ${result}`)
    logger.info(`result = ${result}`)
}

main();


