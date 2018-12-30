/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false

https://leetcode.com/problems/increasing-triplet-subsequence/
*/

// Start with the maximum numbers for the first and second element. Then:
// (1) Find the first smallest number in the 3 subsequence
// (2) Find the second one greater than the first element, reset the first one if it's smaller
var increasingTriplet = function(nums) {
    let min =  Number.MAX_SAFE_INTEGER;
    let secondMin =  Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= min) {
            min = nums[i];
        } else if(nums[i] <= secondMin) {
            secondMin = nums[i];
        } else {
            return true;
        }
    }
    
    return false;
};