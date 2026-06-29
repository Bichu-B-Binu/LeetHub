/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to start a new subarray or continue the current one
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maximum sum found so far
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};