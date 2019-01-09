/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integerdirectly.

https://leetcode.com/problems/multiply-strings/
https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation
*/

var multiply = function(num1, num2) {
  let m = num1.length;
  let n = num2.length;
  let posNum = new Array(m + n).fill(0); // important

  // Empezamos del reverso de las cadenas, es como una multiplicación normal
  for(let i = m - 1; i >= 0; i--) {
   for(let j = n - 1; j >= 0; j--) {
    let multiply = (parseInt(num1[i]) * parseInt(num2[j]));
    let p1 = i + j;
    let p2 = i + j + 1;
    let sum = multiply + posNum[p2];

    // Este es el elemento que se puede traslapar
    posNum[p1] += sum / 10 | 0;
    // Este es el elemento de más a la derecha, no se translapa
    posNum[p2] = (sum) % 10 | 0;
   }
  }

  let result = '';
  for (let index in posNum){
   if (!(result.length == 0 && posNum[index] == 0)) {
    result += posNum[index];
   }
  }
  return result.length == 0 ? "0" : result.toString();
};

n1 = "123456789";
n2 = "987654321";
console.log(multiply(n1, n2));