/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

https://leetcode.com/problems/minimum-window-substring/

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/*
ADOBECODEBANC
BANC
[ADOBEC]ODEBANC, MIN WINDOW = 6
A[DOBECODEBA]NC, MIN WINDOW = 6
ADOBE[CODEBA]NC, MIN WINDOW = 6
ADOBECODE[BANC], MIN WINDOW = 4

// Sliding window technique
1. Cuando la window está calificada para tener el resultado, movemos el head
2. Cuando no, movemos la cola del window
*/
var minWindow = function(s, t) {
  let map = {};
    
  // Initialize the characters we have on S
  for(let i = 0; i < s.length; i++) {
    map[s[i]] = 0;
  }
    
  // We only care about the frequency of S in T
  for(let i = 0; i < t.length; i++) {
    if(t[i] in map) {
      map[t[i]]++;
    } else {
      // If there is no such window in S that covers all characters in T, return the empty string "".
      return '';
    }
  }
    
  // Create window
  let start = 0;
  let end = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  let minStart = 0;
  // Indicator to know whether the window is qualified or not, in this case the elements in T that are mapped
  let numberOfTargets = t.length;
    
  while(end < s.length) {
    let current = s[end];
    if(current in map && (map[current] > 0)) {
      numberOfTargets--;
    }
    map[current]--;
    // This indicates thw window is qualified
    while(numberOfTargets === 0) {
      if(minLength > end - start + 1) {
        minLength = end - start + 1;
        minStart = start;
      }
      let head = s[start];
      // Move forward the head
      if(map[head] >= 0) {
        numberOfTargets++;
      }
      map[head]++;
      // Move the head forward
      start++;
    }
    // Increase the rail of the window
    end++;
  }
    
  return minLength === Number.MAX_SAFE_INTEGER ? '' : s.substring(minStart, minStart + minLength);
};