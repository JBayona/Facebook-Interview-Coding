/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

https://leetcode.com/problems/divide-two-integers/description/

*/

// Option 1
// The implementation above is very inneficient especially when the
// divisor is relative small compared to the dividend. Note that with 
// this solution, we deduct the divisor once a time. If we can deduct
// the divisor in expotential rate, the algorithm will run much faster
var divide = function(dividend, divisor){
  // Edge cases
  if(dividend === 0) return 0;
  if(divisor === 0 && dividend > 0) return Number.MAX_SAFE_NUMBER;
  if(divisor === 0 && dividend < 0) return Number.MIN_SAFE_NUMBER;
  if(divisor === 1) return dividend;
  if(divisor === -1) return -dividend;

  // In JS all numbers are 64 bits floating, in other case here will be the conversion to long numbers
  let dividendL = dividend;
  let divisorL = divisor;

  let isDividendNegative = false;
  let isDivisorNegative = false;

  if(dividendL < 0) {
   isDividendNegative = true;
  }

  if(divisorL < 0) {
   isDivisorNegative = true;
  }

  let result = 0;
  while(dividendL > divisorL) {
   dividendL -= divisorL;
   result++;
  }

  if((!isDividendNegative && isDivisorNegative) || (isDivisorNegative && !isDivisorNegative)) {
   return -result;
  }

  return result;
}

var divide = function(dividend, divisor) {
  if(dividend === 0) return 0;

  let isNeg = false;
  if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
   isNeg = true;
  }

  // In JS all numbers are 64 bits floating, in other case here will be the conversion to long numbers
  let dividendL = dividend;
  let divisorL = divisor;

  let result = 0;

  while(dividendL >= divisorL) {
   let shift = 0;
   // 2 << 0 = 2, 2 << 1 = 4, 2 << 2 = 8, 2 << 3 = 16, 2 << 4 = 32, 2 << 5 = 64
   while(dividendL >= (divisor << shift)) {
    shift++;
   }

   result += (1 << (shift - 1));
   dividendL -= divisor << (shift - 1);
  }

  if (isNeg) return -result;
  return result;

}

// Accepted

public int divide(int dividend, int divisor) {
  if (divisor == 0 || (dividend == Integer.MIN_VALUE && divisor == -1))
    return Integer.MAX_VALUE;

  int sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
  long dvd = Math.abs((long) dividend);
  long dvs = Math.abs((long) divisor);

  int res = 0;
  while (dvd >= dvs) { 
    long temp = dvs, multiple = 1;
    while (dvd >= (temp << 1)) {
        temp = temp << 1;
        multiple = multiple << 1;
    }
    dvd = (int)(dvd - temp);
    res = (int)(res + multiple);
  }
  
  return sign == 1 ? res : -res; 
}



dividend = 16;
divisor = 3;
console.log(divide(dividend, divisor));