// Dynamic Programming
// Reference: https://www.youtube.com/watch?v=NnD96abizww
// https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/LongestCommonSubsequence.java
var minimumRemovalPalindrome = function(str) {
    if(!str || !str.length) {
        return 0;
    }

    let n = str.length;
    let reverse = str.split('').reverse().join('');

    let lcs = longestCommonSubsequence(str, reverse);

    return n - lcs;
}

var longestCommonSubsequence = function(str1, str2) {
    let dp = new Array(str1.length + 1);
    let max = 0;

    // Create our dp table
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(str2.length + 1).fill(0);
    }
    
    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[i].length; j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
            if(dp[i][j] > max) {
                max = dp[i][j];
            }
        }
    }
    console.log(dp);
    return max;
}

str = "abcdaf";
console.log(minimumRemovalPalindrome(str));