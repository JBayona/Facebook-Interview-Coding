/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which
has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

https://leetcode.com/problems/maximum-product-subarray/description/
*/

/*
To find the max we have three choices:
1. If the current element is positive integer
2. If the current element is negative
3. If the current element is a starting point

https://www.youtube.com/watch?v=vtJvbRlHqTA
*/
var maxProduct = function(nums) {
    
    if(nums.length == 0) return 0;

    let prevMaxProduct = nums[0];
    let prevMinProduct = nums[0];
    let currentMaxProd = nums[0];
    let currentMidProd = nums[0];
    let answer = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        currentMaxProd = Math.max(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i]);
        currentMidProd = Math.min(prevMaxProduct * nums[i], prevMinProduct * nums[i], nums[i]);
        answer = Math.max(currentMaxProd, answer);
        // Update
        prevMaxProduct = currentMaxProd
        prevMinProduct = currentMidProd
    }
    
    return answer;

};



var maxProduct = function(nums) {
    
    if(nums.length == 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let maxRes = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] >= 0) {
            maxProduct = Math.max(maxProduct * nums[i], nums[i]);
            minProduct = Math.min(minProduct * nums[i], nums[i]);
        } else {
            let tmp = maxProduct;
            maxProduct = Math.max(minProduct * nums[i], nums[i]);
            minProduct = Math.min(tmp * nums[i], nums[i]);
        }
        
        maxRes = Math.max(maxRes, maxProduct);
    }
    
    return maxRes;

};