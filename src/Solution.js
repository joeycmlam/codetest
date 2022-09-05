// import log4js from "log4js";

const log4js = require('log4js');

class Solution {


    constructor() {
        this.logger = log4js.getLogger();
        this.logger.level = "debug";
    }

    /**
     * @return {number}
     * @param num1
     * @param num2
     */
    multiply = function(num1, num2) {

        const result = num1 * num2;
        return result;
    };

    twoSum = function (nums, targets) {
        let result = [];
        let i = 0;
        let j = 0;
        let found = false;

        for (i = 0; i < nums.length; i ++) {
            for (j = i+1; j < nums.length - 1; j++) {

                if ((nums[i] + nums[j]) == targets) {
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }

        if (found) {
            result.push(i);
            result.push(j);
        }

        return result;
    }


    twoSumAlgo = function (nums, targets) {
        let result = [];
        this.logger.info(`before: ${nums}`);
        nums.sort();
        let left = 0;
        let right = nums.length - 1;
        let found = false;

        for (let i = 0; i < nums.length; i++) {

            let a = nums[left];
            let b = nums[right];
            let sum = a + b;
            if (sum == targets) {
                found = true;
                break;
            } else if (sum > targets) {
                // move left
                right = right - 1;
            } else if (sum < targets) {
                //move to right
                left = left + 1;
            }

        }

        if (found) {
            result.push(left);
            result.push(right);
        }

        return result;
    }

}

module.exports = Solution



