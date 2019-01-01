/*
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations
that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?

https://leetcode.com/problems/combination-sum-iv/
https://www.programcreek.com/2014/07/leetcode-combination-sum-iv-java/
http://www.cnblogs.com/grandyang/p/5705750.html
http://anothercasualcoder.blogspot.com/2016/12/leetcode-combination-sum-iv.html

Coin change
https://www.programcreek.com/2015/04/leetcode-coin-change-java/

Time complexity: O(nlogn + target*n)
*/

/*
Run:
[1,2,3] target = 4
dp[0] = 1,
dp[1] = 1, 
dp[2] = 1 + 1 = 2, 
dp[3] = 1 + 1 + 2 = 4, 
dp[4] = 1 + 2 + 4 = 7 (we have no 4 in nums, so dp[4] = 1 + 2 + 4 = 7, not 1 + 1 + 2 + 4 = 8)
*/

// we know that target is the sum of numbers in the array. Imagine we only need one more number to reach target, 
// this number can be any one in the array, right? So the # of combinations of target, comb[target] = sum(comb[target - nums[i]]), 
// where 0 <= i < nums.length, and target >= nums[i].
// In the example given, we can actually find the # of combinations of 4 with the # of combinations of 3(4 - 1), 2(4- 2) and 1(4 - 3). 
// As a result, comb[4] = comb[4-1] + comb[4-2] + comb[4-3] = comb[3] + comb[2] + comb[1].

/*
*****Follow Up*****

What if negative numbers are allowed in the given array?
Then adding a num to the combination is not guaranteed to be increasing, which means I can add a huge bounch of negative nums
and add a huge bounch of positive nums to achieve a target sum. 
eg.target=0:[-1,1],[-1,-1,1,1],[-1,-1,-1,1,1,1]...

How does it change the problem?
We will have lots of lots of possible combinations, even infinity.

What limitation we need to add to the question to allow negative numbers?
For example, each negative num can only be used once, etc.
*/
var combinationSum4 = function(nums, target) {
  if(!nums.length) return 0;
  let dp = new Array(target + 1).fill(0);

  dp[0] = 1;
  nums.sort((a,b) => a - b);

  // if target is much larger than num of nums, we can sort nums and break the inner for loop if j > i
  for(let i = 0; i <= target; i++) {
   for(let j = 0; j < nums.length && nums[j] <= i; j++) {
    dp[i] = dp[i] + dp[i - nums[j]];
   }
  }

  return dp[target];
};

nums = [1, 2, 3];
target = 4;
console.log(combinationSum4(nums, target));