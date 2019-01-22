/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

https://leetcode.com/problems/subsets-ii/description/
*/

// Opción 1
var subsetsWithDup = function(nums) {
  let result = [];
  // Sort to make easier to detect duplicates
  nums.sort((a,b) => a-b);
  dfs(result, [], 0, nums.length, nums);
  return result;
};

function dfs(result, tmp, start, end, nums) {
  result.push(tmp);
  for(let i = start; i < end; i++) {
    // Skip duplicates
    if(i > start && nums[i] === nums[i-1]) {
        continue;
    }
    tmp.push(nums[i]);
    dfs(result, tmp.concat(), i + 1, end, nums);
    tmp.pop();
  }
}

// Opción 2
var subsetsWithDup = function(nums) {
  var result = [];
  if(nums.length === 0) return result;
  //In case is not sorted
  /*Asi no habra duplicados*/
  nums.sort((a,b) => a-b);
  helper(result, [], 0, nums.length-1, nums);
  return result;
};

function helper(result, currArr, start, end, nums){
  result.push(currArr);
  for(let i = start; i <= end; i++){
    //Skip duplicates
    if(i > start && nums[i] === nums[i-1]){
      continue;
    }
    currArr.push(nums[i]);
    helper(result, currArr.concat(), i+1, end, nums);
    currArr.pop();
  }
}

nums = [1,2,2]
console.log(subsetsWithDup(nums));
