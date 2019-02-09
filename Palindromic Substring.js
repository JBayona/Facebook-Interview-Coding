/*

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

https://leetcode.com/problems/palindromic-substrings/

NoteL
Checar el problema de longest common substring y longest common subsequence
*/

// Idea is start from each index and try to extend palindrome for both odd and even length
var countSubstrings = function(s) {
  let count = 0;

  for(let i = 0; i < s.length; i++) {
   // Odd length (Longitud par)
   let left = i;
   let right = i;
   while(left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
    count++;
   }

   // Even length (Longitud impar)
   left = i;
   right = i + 1;
   while(left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
    count++;
   }
  }
  return count;
};

str = "abc";
console.log(countSubstrings(str));