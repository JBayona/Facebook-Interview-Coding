/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


https://leetcode.com/problems/implement-strstr/description/
*/

var strStr = function(haystack, needle) {
  if(haystack.length === needle.length) return haystack === needle ? 0 : -1;
  if(needle.length === 0) return 0;
  if(haystack.length < needle.length) return -1;
  
  let first = needle[0];
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === first) {
      let j = 1
      for(; j < needle.length; j++) {
          if(haystack[i + j] !== needle[j]) {
              break;
          }
      }
      if(j === needle.length) {
          return i;
      }
    }
  }
  return -1;
};

var strStr = function(haystack, needle) {
    let result = 0;
    let firstLetter = needle[0];
    let tamStr = needle.length;
    if(haystack === "" && needle !== "") return -1;
    if(needle === "") return 0;
    for(let i = 0; i < haystack.length; i++){
      if(haystack[i] === firstLetter){
      	/*En slice incluye la primera posición pero no la
      	última y como es 0-based, está en lo correcto*/
        if(haystack.slice(i, i + tamStr) === needle){
          return i;
        }
      }
    }
    return -1;
};

haystack = "mississippi";
needle = "issip";
console.log(strStr(haystack, needle));