/*
Dot Product of spare vector:

a0         b1
a1         b2
a2    X    b3   = a0xb0 + a1xb1 + a2xb2 ..... + anxbn
a3         b4
a4         b5
an         bn

https://leetcode.com/discuss/interview-question/124823/dot-product-of-sparse-vector/
*/

var dotProduct = function(a, b) {
  let hashA = {};
  let hashB = {};
  let result = 0;

  if(a.length && !b.length) {
   return a;
  }

  if(b.length && !a.length) {
   return b;
  }

  for(let i = 0; i < Math.max(a.length, b.length); i++) {
   if(a[i] && a[i] !== 0) hashA[i] = a[i];
   if(b[i] && b[i] !== 0) hashB[i] = b[i];
  }

  for(key in hashA) {
   if(key in hashB) {
    result += hashA[key] * hashB[key];
   }
  }

  return result;
}

a = [1,4,6,8,9,6];
b = [2,8,2,4,3];
console.log(dotProduct(a, b));