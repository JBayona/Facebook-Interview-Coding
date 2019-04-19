/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also
in sorted non-decreasing order.

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.


https://leetcode.com/articles/squares-of-a-sorted-array/
*/

// Opción 1
// Two pointer
// Time Complexity: O(N) where N is the length of A.
// Space Complexity: O(N)
/*
Intuition

Since the array A is sorted, loosely speaking it has some negative elements with squares in decreasing order,
then some non-negative elements with squares in increasing order.

For example, with [-3, -2, -1, 4, 5, 6], we have the negative part [-3, -2, -1] with squares [9, 4, 1], and the
positive part [4, 5, 6] with squares [16, 25, 36]. Our strategy is to iterate over the negative part in reverse, and
the positive part in the forward direction.

Algorithm:
We can use two pointers to read the positive and negative parts of the array - one pointer j in the positive direction, and another i in the negative direction.
Now that we are reading two increasing arrays (the squares of the elements), we can merge these arrays together using a two-pointer technique.
*/
function sortedSquares(array) {
    let result = [];
    let j = 0;

    while(j < array.length && array[j] < 0) {
        j++;
    }

    let i = j - 1;
    let index = 0;

    while(i >= 0 && j < array.length) {
        if(array[i] * array[i] < array[j] * array[j]) {
            result[index++] = array[i] * array[i];
            i--;
        } else {
            result[index++] = array[j] * array[j];
            j++;
        }
    }

    // If we have missing values
    while (i >= 0) {
        result[index++] = array[i] * array[i];
        i--;
    }

    while (j < array.length) {
        result[index++] = array[j] * array[j];
        j++;
    }

    return result;
}

// Opción 2
// Time Complexity: O(Nlog N) where N is the length of A.
// Space Complexity: O(N) 
function sortedSquares(array) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result[i] = array[i] * array[i];
    }
    return result.sort((a,b) => a - b);
}

array = [-4,-1,0,3,10];
console.log(sortedSquares(array));