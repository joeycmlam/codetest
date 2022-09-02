
export class Solution {

    constructor() {

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
        let a = 0;
        let b = 0;
        let i = 0;
        let j = 0;
        let  found = false;

        for (i = 0; i < nums.length; i ++) {
            a = nums[i];
            for (j = i+1; j < nums.length - 1; j++) {
                b = nums[j];

                if ((a + b) == targets) {
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

}



