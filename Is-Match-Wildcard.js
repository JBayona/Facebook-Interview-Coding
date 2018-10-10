/*
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.

https://leetcode.com/problems/wildcard-matching/description/
*/

var isMatch = function(s, p) {
    let memo = []
    for(let i = 0; i < s.length+1; i++) {
        memo[i] = new Array(p.length+1);
    }
    return dp(s, p, 0, 0, memo);
};

function dp(s, p, i, j, memo) {
    if(memo[i][j]) {
        return memo[i][j];
    }
    
    let result = false;
    // Check last char of p, if it's '*' return true, we have checked all the chars at this point
    if(j === p.length-1 && p[j] === "*") {
        result = true;
    } else {
        // If we complete the check for j
        if(j === p.length) {
            // If we still have chars in "s" means we were not able to match
            return i === s.length;
        }
        if(p[j] === "*") {
            // if "*" is empty sequence(blank space) check dp(s,p,i, j+1, memo)
            //otherwise check dp(s,p,i+1,j, memo)
            result = dp(s,p,i,j+1,memo) || (i < s.length && dp(s,p, i+1, j, memo))
        } else if (i < s.length && (s[i] === p[j] || p[j] === '?')) {
            result = dp(s,p, i+1, j+1, memo);
        }
    }
    memo[i][j] = result;
    return result;
}


s = "aab";
p = "c*a*b";
console.log(isMatch(s,p));