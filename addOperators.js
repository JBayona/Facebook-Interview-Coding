/*
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or *between the digits so they evaluate to the target value.

Example 1:

Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
Example 2:

Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
Example 3:

Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
Example 4:

Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
Example 5:

Input: num = "3456237490", target = 9191
Output: []

https://leetcode.com/problems/expression-add-operators/description/
*/

var addOperators = function(num, target) {
  let result = [];
  let start = 0;
  let eval = 0;
  let mult = 0;
  let str = ''
  dfs(result, str, num, target, start, eval, mult);
  return result;
};

// Mult it's important to carry it for using the multiply option
function dfs(result, str, num, target, start, eval, mult) {
  // Base case
  if(start === num.length) {
    if(eval === target) {
      result.push(str);
    }
    return;
  }

  for(let i = start; i < num.length; i++) {
    if(num[start] === '0' && i !== start) break; // Can not be leading 0s, so let's break the recursion
    // 123 = 1, 12, 123, this is the value of current
    let current = parseInt(num.substring(start, i + 1));
          // For the case we just need to add in the string the number
    if(start === 0) {
      dfs(result, str + current, num, target, i + 1, current, current);
    } else {
      // Get all combinations
      dfs(result, str + '+' + current, num, target, i + 1, eval + current, current);

      dfs(result, str + '-' + current, num, target, i + 1, eval - current, -current);

      dfs(result, str + '*' + current, num, target, i + 1, eval - mult + mult * current, mult * current);
   }
  }
}

num = "123";
target = 6;
console.log(addOperators(num, target));