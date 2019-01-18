/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?


https://leetcode.com/problems/sort-colors/description/
*/
//O(N) time complexity and O(1) space complexity
var sortColors = function(nums) {
    //Posicion en donde termian las bolas rojas
    var redEnds = 0;
    //Las ultimas posiciones son para las bolas azules
    var blueStars = nums.length -1

    //Empieza el loop para ordenar las bolas
    for(var i = 0; i <= blueStars; ){
      if(nums[i] === 0){
        //Hacemos swao
        swap(redEnds, i, nums);
        //Incrementamos en donde terminan las bolas rojas
        redEnds++;
        //Incrementamos i
        i++;
      }else if(nums[i] === 2){
        //Hacemos swap
        swap(blueStars, i, nums);
        //Decrementamos la posicion en donde empiezan las bolas azules
        blueStars--;
      }else{
        i++;
      }
    }
    return nums;
};

function swap(a,b, array){
  var tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

// Option 2
var sortColors = function(nums) {
    var redEnds = 0;
    var blueStars = nums.length -1

    //Empieza el loop para ordenar las bolas
    let i = 0;
    while(i <= blueStars){
      if(nums[i] === 0){
        swap(redEnds, i, nums);
        redEnds++;
        i++;
      }else if(nums[i] === 2){
        swap(blueStars, i, nums);
        blueStars--;
      }else{
        i++;
      }
    }
    console.log(nums);
};

function swap(a,b, array){
  var tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

var sortColors = function(nums) {
  let result = [];
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let tmp = 0;
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      count0++;
    }
    if(nums[i] === 1) {
      count1++;
    }
    if(nums[i] === 2) {
      count2++;
    }
  }

  // Set 0's
  for(let i = 0; i < count0; i++) {
    result[tmp++] = 0;
  }
  
  // Set 1´s
  for(let i = 0; i < count1; i++) {
    result[tmp++] = 1;
  }
  
  // Set 2´s
  for(let i = 0; i < count2; i++) {
    result[tmp++] = 2;
  }
  
  console.log(result);
    
  return result;
}


//var array = [0,1,2,2,0,1,2,0,1,1,2];
var array = [1,2,0];
console.log(sortColors(array));