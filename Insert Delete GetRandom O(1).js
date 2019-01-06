/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

https://leetcode.com/problems/insert-delete-getrandom-o1/
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = [];
    this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(val in this.map) return false;
  // If the element is not present
  this.map[val] = this.nums.length;
  this.nums.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!(val in this.map)) return false;

  let index = this.map[val];

  // Swap the index of the element we want to remove with the last element, as we want to make it O(1), shifting will be
  // faster than just removing in any index
  // shift the removed element to the last position instead of removing
  let lastElemet = this.nums[this.nums.length - 1];
  let tmp = this.nums[index];
  this.nums[index] = lastElemet;
  this.nums[this.nums.length - 1] = tmp;

  // Update the map with the value of the last element 
  this.map[lastElemet] = index;

  // delete from the map
  delete this.map[val];
  // delete from the array the last element as we know is the want to remove, we swapped to the final of the array
  this.nums.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random() * this.nums.length);
  return this.nums[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Init an empty set.
randomSet = new RandomizedSet();
console.log(randomSet.insert(0));
console.log(randomSet.insert(1));
console.log(randomSet.remove(0));
console.log(randomSet.insert(2));
console.log(randomSet.remove(0));
console.log(randomSet.getRandom());
