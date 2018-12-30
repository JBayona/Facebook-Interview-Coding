/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

https://leetcode.com/problems/search-in-rotated-sorted-array/description/

*/

var search = function(nums, target){
  var start = 0;
  var end = nums.length - 1;
  var mid = 0;

  while(start <= end){
    mid = Math.floor((start+end)/2);
    if (nums[mid] === target) {
          return mid;
    } else if (nums[start] <= nums[mid]) {// left side sorted
      if (nums[mid] > target && nums[start] <= target) {
        /*Si el subarray izquierdo esta ordenado, es facil saber
        si el elemento se encuentra en esa mitad*/
        // nums[mid] !== target, can safely do end = mid - 1
        end = mid - 1;
      } else {
        //Recorta la seccion a analizar
        start = mid + 1;
      }
    } else { // right side sorted
      /*Si no esta ordenado la parte izquierda, la derecha
      debe de estar ordenada*/
      if (nums[mid] < target && nums[end] >= target) {
        // nums[mid] !== target, can safely do start = mid + 1
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

array = [4,5,6,7,0,1,2];
target = 3; 
console.log(search(array, target));


//Opcion 2

var search = function(nums, target) {
    let map = {};
    if(nums.length === 0) return -1
    nums.forEach((item, index) => map[item] = index);
    console.log(map);
    //Return result;
    if(target in map){
        return map[target];
    }else{
        return -1;
    }
};