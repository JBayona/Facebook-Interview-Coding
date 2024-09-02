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
var minWindow = function (s, t) {
  let map = {};
  // We only care about the frequency on T
  for (const char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let minStart = 0;
  let count = t.length;

  while (end < s.length) {
    let current = s[end];
    // Check if the element is in the map, if yes, decrement the target
    if (current in map) {
      // As long as we have elements to decrese we deduct
      if (map[current] > 0) {
        count--;
      }
      // Update the map always, we can have numbers < 0 if our window does not have
      // a number in the "t" string
      map[current]--;
    }

    // Elegible window for a result
    while (count === 0) {
      // Try to get the min result
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
        // Track where the min window starts
        minStart = start;
      }
      // Move the window
      let l = s[start];
      // We only care about those being tracked
      // We need to find them again later
      if (map[l] >= 0) {
        count++;
      }
      map[l]++;
      start++;
    }
    // Increase the end window
    end++;
  }
  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength);
};
