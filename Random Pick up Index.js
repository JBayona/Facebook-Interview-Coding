/*
Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

Example:

int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
solution.pick(1);

https://leetcode.com/problems/random-pick-index/
*/

// O(N) Time complexity
// O(1) Space complexity
var Solution = function(nums) {
  this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    
  let countOcurrences = 0;
  let result = -1;
  
  // Count the number of ocurrences
  for(let i = 0; i < this.nums.length; i++) {
    if(this.nums[i] === target) {
      countOcurrences++;
    }
  }
  
  // Random element ocurrence, from 0 to N where N is the number of ocurrences
  let random = Math.floor(Math.random() * countOcurrences);
  for(let i = 0; i < this.nums.length; i++) {
    if(this.nums[i] === target) {
      random--;
      if(random === -1) {
        result = i;
        break;
      }
    }
  }

  return result;
};


// O(N) Time complexity
// O(N) Space complexity
var Solution = function(nums) {
  this.hash = {};
    
  // Fill hash
  let num;
  for(let i = 0; i < nums.length; i++) {
    num = nums[i];
    if(nums[i] in this.hash) {
      this.hash[num].push(i);
    } else {
      this.hash[num] = [i];
    }
  }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  if(!(target in this.hash)) return -1;
  
  let options = this.hash[target];
  let index = Math.floor(Math.random() * options.length);
  return options[index];
};