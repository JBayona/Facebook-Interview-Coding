/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

*/

var findDisappearedNumbers = function(nums) {
  let result = [];
  
  if(!nums.length) {
      return [];
  }
  
  for(let i = 0; i < nums.length; i++) {
    // Get the index 0-based
    let index = Math.abs(nums[i]) - 1;
        
    // If the number is negative it means that the number
    // has been found.
    // Marcamos con negativo los números de los indices que 
    // vayamos encontrando
    if (nums[index] > 0) {
        nums[index] = -nums[index];
    }
  }
  
  // The positive numbers are those that were not found
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
      result.push(i + 1);
    }
  }
  
  console.log(nums);
  return result;
};

// Time O(n)
// Space O(n)
var findDisappearedNumbers = function(nums) {
  let hash = {};
  let result = [];
  
  if(!nums.length) {
    return result;
  }
  
  for(let i = 0; i < nums.length; i++) {
    if(!(nums[i] in hash)) {
      hash[nums[i]] = true;
    }
  }
  
  for(let i = 1; i <= nums.length; i++) {
    if(!(i in hash)) {
      result.push(i);
    }
  }
  
  return result;
};