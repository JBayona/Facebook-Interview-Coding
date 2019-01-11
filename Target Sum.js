/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -.
For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.

https://leetcode.com/problems/target-sum/

Check https://github.com/wey068/Facebook-Interview-Coding/blob/master/494.%20TargetSum.java
*/

// DFS + Memoization
var findTargetSumWays = function(nums, S) {
  // Index
  let i = 0;
  let memo = {};
  return dfs(nums, S, i, memo);
};

function dfs(nums, sum, i, memo) {
  // Generate the key
  let key = i + ":" + sum;
  if(key in memo) {
   return memo[key];
  }

  // Count the number of ways if the sum is equal to 0, we should use the number of element in our input array
  if(i === nums.length) {
   return sum === 0 ? 1 : 0;
  }

  // Invert the signs here to reach the 0 depending if we need to add or substract
  let add = dfs(nums, sum - nums[i], i + 1, memo);
  let minus = dfs(nums, sum + nums[i], i + 1, memo);

  // Save our partial response
  memo[key] = add + minus;
  return add + minus;
}

nums = [1, 1, 1, 1, 1];
S = 3;
console.log(findTargetSumWays(nums, S));