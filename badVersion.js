/*
so bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.

https://leetcode.com/problems/first-bad-version/description/

/*

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  // Binary Search
  return function(n) {
    let left = 0;
    let right = n - 1;
    while(left <= right) {
      let middle = Math.floor((left + right)/2);
      if(isBadVersion(middle)) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    
    return left;
  };
};