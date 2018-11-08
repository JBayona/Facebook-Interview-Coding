/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4

https://leetcode.com/problems/maximal-square/description/
https://www.youtube.com/watch?v=_Lf1looyJMU

*/

var maximalSquare = function(matrix) {

    if(matrix.length === 0) {
     return 0;
    }

    let dp = new Array(matrix.length);
    for(let i = 0; i < dp.length; i++) {
     dp[i] = new Array(matrix[0].length).fill(0);
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let max = 0;

    // Pasamos los de los corners ya que no hay mas elementos
    for(let i = 0; i < m; i++) {
     dp[i][0] = matrix[i][0];
     // Corner case [1]
     if(dp[i][0] === 1) {
      max = 1;
     }
    }

    for(let i = 0; i < n; i++) {
     dp[0][i] = matrix[0][i];
     // Corner case [1]
     if(dp[0][i] === 1) {
      max = 1;
     }
    }

    for(let i = 1; i < m; i++) {
     for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 1) {
       dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j]) + 1;
       max = Math.max(max, dp[i][j]);
      }
     }
    }

    return max * max;

};


matrix = [
[1,1,0,1,0],
[0,1,1,1,0],
[1,1,1,1,0],
[0,1,1,1,1],
];

console.log(maximalSquare(matrix));