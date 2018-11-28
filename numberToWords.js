/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety 

https://leetcode.com/problems/integer-to-english-words/description/


Vamos dividiendo de 3 en 3, por ejemplo:
123 = 123
1234 = Primero analizamos 234 y después sólo el 1
12345 = 345 y 12
123456 = 456 y 123
1234567 = 567, 234 y 1 = One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven 
*/

let lessThan20 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
let thousands = ['', 'Thousand', 'Million', 'Billion'];

var numberToWords = function(num) {

  // Corner case
  if(num === 0) return 'Zero';

  let result = '';
  let i = 0;
  // Keep looping while we get zero
  while(num > 0) {
   if(num % 1000 !== 0) {
    result = helper(num % 1000) + thousands[i] + ' ' + result;
   }
   num = Math.floor(num/1000);
   i++;
  }

  return result.trim(); // Remove trailing spaces
};

function helper(num) {
  if(num === 0) return ''; // necessary! 50868
  else if(num < 20) return lessThan20[num] + ' '; // 1 - 19
  else if(num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10); // 20, 30, 40, 50, 60, 70, 80, 90
  else return lessThan20[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100); // > 100
}

// n = 1234567;
// n = 1000010;
n = 1000;
// n = 0;
console.log(numberToWords(n));