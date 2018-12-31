/*
Given a string, find the length of the longest substring T that contains at most k distinct characteres.
For example, Given s = "eceba" and k = 2
T is "ece" which length is 3

https://www.youtube.com/watch?v=RHFrVNmlyA8
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

Time Complexity O(N^2)
Space Complexity O(N^2)
*/
var lengthOfLongestSubstringKDistinct = function(str, k) {
  let hash = {};
  let maxLength = 0;
  let result = 0;

  for(let i = 0; i < str.length; i++) {
    // Clean hash and maxLenght
    hash = {};
    maxLength = 0;
    for(let j = i; j < str.length; j++) {
      // Override hash with new indexes
      hash[str[j]] = j;
      // While our hash stores less than k characteres we should update our values
      if(Object.keys(hash).length <= k) {
        maxLength++;
        result = Math.max(maxLength, result);
      } else {
        // If we find more than k, break the loop and check the next iteration
        break;
      }
    }
  }
  return result;
}

str = "karappa";
k = 2; // appa - result = 4
k = 3; // arappa - result = 6
console.log(lengthOfLongestSubstringKDistinct(str, k));

// Time O(N)
// Space O(N)
// https://www.youtube.com/watch?v=8AQra0p_HmI
// https://www.programcreek.com/2013/02/longest-substring-which-contains-2-unique-characters/
var lengthOfLongestSubstringKDistinct = function(str, k) {
  let hash = {};
  let result = 0;
  let start = 0;

  for(let i = 0; i < str.length; i++) {
    let c = str[i];
    if(c in hash) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }

    if(Object.keys(hash).length <= k) {
      result = Math.max(result, i - start + 1);
    } else {
      // If we have rebased the limit, remove the most left element
      while(Object.keys(hash).length > k) {
        let l = str[start];
        let count = hash[l];
        if(count === 1) {
          delete hash[l];
        } else {
          hash[l]--;
        }
        start++;
      }
    }
  }
  return result;
}