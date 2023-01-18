/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

https://leetcode.com/problems/valid-palindrome/description/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let alphanumeric = /^[a-z0-9]+$/i;

  while (left < right) {
    // Skip non-alphanumeric chars
    while (left < right && !alphanumeric.test(s[left])) {
      left++;
    }

    // Skip non-alphanumeric chars
    while (left < right && !alphanumeric.test(s[right])) {
      right--;
    }

    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) {
      return false;
    }
  }
  return true;
};