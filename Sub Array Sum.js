/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

https://leetcode.com/problems/subarray-sum-equals-k/
*/

// Acumulative sum
// Time complexity: O(N^2)
// Space complexity: O(1)
var subarraySum = function(nums, k) {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum === k) {
                result++;
            }
        }
    }
    return result;
};

// Time complexity: O(N)
// Space complexity: O(N)
var subarraySum = function(nums, k) {
    let result = 0;
    let sum = 0;
    let hash = {};
    // In case we found the exact match
    // 0 with 1 seen
    hash[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum - k in hash) {
            result += hash[sum-k];
        }
        // Si existe, incrementamos el número de veces
        // que hemos encontrado la suma, de lo contrario
        // ponemos un 1
        hash[sum] = hash[sum] ? hash[sum] + 1 : 1;
    }
    return result;
};

array = [1,1,1];
k = 2;
console.log(subarraySum(array, k));