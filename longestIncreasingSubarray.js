/*
Longest increasing subarray
Given an array containing n numbers. The problem is to find the length of the longest contiguous 
subarray such that every element in the subarray is strictly greater than its previous element in the same 
subarray. Time Complexity should be O(n).

Examples:

Input : arr[] = {5, 6, 3, 5, 7, 8, 9, 1, 2}
Output : 5
The subarray is {3, 5, 7, 8, 9}

Input : arr[] = {12, 13, 1, 5, 4, 7, 8, 10, 10, 11}
Output : 4
The subarray is {4, 7, 8, 10}

*/

/*Longest Increasing subarray, continuo*/
function longestIncreasingSubarray(nums){
  var max = 0;
  var count = 1;
  if(nums.length === 0) return 0;
  for(let i = 0; i < nums.length; i++){
    /*Si el siguiente elemento es mayor al actual
    incrementamos el contador y actualizamos nuestro
    resultado*/
    if(nums[i+1] > nums[i]){
      count++;
      max = Math.max(max, count);
    }else{
      /*Reseteamos el contador*/
      //Reset
      count = 1;
    }
  }
  return max;
}

nums = [12, 13, 1, 5, 4, 7, 8, 10, 10, 11];
console.log(longestIncreasingSubarray(nums));