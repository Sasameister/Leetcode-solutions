/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sums = [];
    for(let i = 0; i < nums.length; ++i)
    {
        let runningNum = 0;
        for(let j = 0; j < i + 1; ++j)
        {
            runningNum += nums[j];
        }
        sums.push(runningNum);
    }
    return sums;
};