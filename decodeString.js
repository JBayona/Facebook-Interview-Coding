/*
Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being
repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

https://leetcode.com/problems/decode-string/description/
*/

// Using stacks

var decodeString = function(s) {
  let regex = /\d/;
  let stackStr = [];
  let stackNumber = [];
  let num = '';
  let char;
  let currentStr = '';
  for(let i = 0; i < s.length; i++) {
    char = s[i];
    // If we have a digit, keep looking for the number
    if(regex.test(char)) {
      num += char;
    } else if (char === '[') {
      // This condition because we can have nested values with [] 
      stackNumber.push(parseInt(num))
      stackStr.push(currentStr);
      num = '';
      currentStr = '';
    } else if (char === ']') {
      prevStr = stackStr.pop();
      times = stackNumber.pop()
      currentStr = prevStr + currentStr.repeat(times);
    } else {
      // Keep getting elements
      currentStr += char;
    }
  }
  return currentStr;
};

s = "3[a]2[bc]"; // return "aaabcbc".
// s = "3[a2[c]]" // "accaccacc"
console.log(decodeString(s));
