/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Complex O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    var complement = 0;
    var element = 0;

    for(var i = 0; i < nums.length; i++){
	  //Store the element in the array for quick access
	  element = nums[i];
	  //We need to check the complement for the target
	  complement = target - element;
	  //If we saw the complement, we have found the indexs
      if(complement in hash){
      	return [hash[complement], i];
      }else{ //We store the element with the index it has
      	hash[element] = i;
      }
    }
};

nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums,target));

var twoSumWithDuplicates = function(array, target) {
  let map = {};
  // Result has the indexes of the elements
  let result = [];

  for(let i = 0; i < array.length; i++) {
    if(!(array[i] in map)) {
      // Puede ser también un set
      // map[array[i]] = new Set();
      map[array[i]] = [];
    }
    map[array[i]].push(i);

    if(target - array[i] in map) {
      let set = map[target - array[i]];
      set.forEach((item) => {
        // Does not allow duplicates numbers, the same index can not be used
        if(item !== i) {
            result.push([i, item]);
        }
      });
    }
  }
  return result;
}

array = [2, 4, 3, 4, 4, 6];
target = 8;
console.log(twoSumWithDuplicates(array, target));