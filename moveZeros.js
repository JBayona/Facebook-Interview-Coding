/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

https://leetcode.com/problems/move-zeroes/description/
*/

//Ceros atras orden
var moveZeroes = function(nums) {
  var index = 0;
  var tmp = 0;
  for(let i = 0; i < nums.length; i++){
    //Si hay un numero diferente de cero
    if(nums[i]){
      //Almacenamos ese numero temporal en una variable
      tmp = nums[i];
      /*Ponemos en ese valor lo que este en nuestra posicion
      controlada por index */
      nums[i] = nums[index];
      /*index controla los valores que vamos poniendo de atras
      para adelante*/
      nums[index] = tmp;
      /*Incrementamos index*/
      index++;
    }
  }
  return nums;
};

nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums));


//Ceros Adelante 
var moveZeroes = function(nums) {
  var index = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums[i] = nums[index];
      nums[index++] = 0; 
    }
  }
  return nums;
};

//Ceros Atras sin orden 
var moveZeroes = function(nums) {
  var index = nums.length-1;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0 && i < index){
      nums[i] = nums[index];
      nums[index--] = 0;
    }
  }
  return nums;
};

nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums));