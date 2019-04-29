/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous
subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 


https://leetcode.com/problems/minimum-size-subarray-sum/
*/

var minSubArrayLen = function(s, nums) {
    if(!nums || !nums.length) {
        return 0;
    }
    let sum = 0;
    let i = 0;
    let j = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    
    while(j < nums.length) {
        sum += nums[j++];
        while(sum >= s) {
            min = Math.min(min, j - i);
            sum -= nums[i++];
        }
    }
    
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;  
};