/*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]

https://leetcode.com/problems/remove-invalid-parentheses/description/

*/

/**
 * @param {string} s
 * @return {string[]}
 */

/*
Explanation:
We all know how to check a string of parentheses is valid using a stack. Or even simpler use a counter.
The counter will increase when it is ‘(‘ and decrease when it is ‘)’. Whenever the counter is negative, we have more ‘)’ than ‘(‘ in the prefix.

To make the prefix valid, we need to remove a ‘)’. The problem is: which one? The answer is any one in the prefix. However, if we remove any one, we will generate duplicate results, for example: s = ()), we can remove s[1] or s[2] but the result is the same (). Thus, we restrict ourself to remove the first ) in a series of concecutive )s.

After the removal, the prefix is then valid. We then call the function recursively to solve the rest of the string. However, we need to keep another information: the last removal position. If we do not have this position, we will generate duplicate by removing two ‘)’ in two steps only with a different order.
For this, we keep tracking the last removal position and only remove ‘)’ after that.

Now one may ask. What about ‘(‘? What if s = ‘(()(()’ in which we need remove ‘(‘?
The answer is: do the same from right to left.
However a cleverer idea is: reverse the string and reuse the code!
*/

//Complexity O(nk)
// n - length of the string
// k - number of recursion calls
var removeInvalidParentheses = function(s) {
    let result = [];
    remove(s, result, 0, 0, ['(', ')']);
    return result;
};

function remove(s, result, last_i, last_j, par, count, removed) {
    let stack = 0;
    for (let i = last_i; i < s.length; ++i) {
        if (s[i] == par[0]) stack++;
        if (s[i] == par[1]) stack--;
        if (stack >= 0) continue;
        for (let j = last_j; j <= i; ++j)
            if (s[j] == par[1] && (j == last_j || s[j - 1] != par[1])) {
                remove(s.substring(0, j) + s.substring(j + 1, s.length), result, i, j, par);
            }
        return; // important to avoid a lot of calls!
    }
    // stack >= 0 : try reverse s and re-do DFS; if already reversed, then add to res
    let reversed = s.split('').reverse().join('');
    if (par[0] == '(') // finished left to right
        remove(reversed, result, 0, 0, [')', '(']); //Reverse and start again
    else { // finished right to left
        result.push(reversed);
    }
}

// Time O(N), 2 pass

function removeInvalidParentheses(str) {
    let left = remove(str, ['(', ')']);
    let reversed = left.split('').reverse().join('');
    let right = remove(reversed, [')', '(']);
    return right.split('').reverse().join('');
}

function remove(str, p) {
    let stack = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === p[0]) stack++;
        if(str[i] === p[1]) stack--;
        // Unbalance
        if(stack < 0) {
            str = str.substring(0, i) + str.substring(i+1);
            i--;
            stack = 0;
        }
    }
    return str;
}



str = "()())()"
console.log(removeInvalidParentheses(str));

