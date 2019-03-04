// We can solve this problem in O(n2) time using Dynamic Programming. To get idea of the DP solution, let us first discuss solution of following simpler problem.

// Given a sorted set, find if there exist three elements in Arithmetic Progression or not
// Please note that, the answer is true if there are 3 or more elements in AP, otherwise false.
// To find the three elements, we first fix an element as middle element and search for other two (one smaller and one greater). 
// We start from the second element and fix every element as middle element. For an element set[j] to be middle of AP, 
// there must exist elements ‘set[i]’ and ‘set[k]’ such that set[i] + set[k] = 2*set[j] where 0 <= i < j and j < k <=n-1. 
// How to efficiently find i and k for a given j? We can find i and k in linear time using following simple algorithm.
// 1) Initialize i as j-1 and k as j+1
// 2) Do following while i >= 0 and j <= n-1 .........
//  a) If set[i] + set[k] is equal to 2*set[j], then we are done.
//  b) If set[i] + set[k] > 2*set[j], then decrement i (do i–-).
//  c) Else if set[i] + set[k] < 2*set[j], then increment k (do k++).

// How to extend the above solution for the original problem?
// The above function returns a boolean value. The required output of original problem is Length of the Longest Arithmetic Progression (LLAP) which is an integer value. 
// If the given set has two or more elements, then the value of LLAP is at least 2 (Why?).

// The idea is to create a 2D table L[n][n]. An entry L[i][j] in this table stores LLAP with set[i] and set[j] as first two elements of AP and j > i. 
// The last column of the table is always 2 (Why – see the meaning of L[i][j]). Rest of the table is filled from bottom right to top left. 
// To fill rest of the table, j (second element in AP) is first fixed. i and k are searched for a fixed j. 
// If i and k are found such that i, j, k form an AP, then the value of L[i][j] is set as L[j][k] + 1. 
// Note that the value of L[j][k] must have been filled before as the loop traverses from right to left columns.

// Reference: https://www.geeksforgeeks.org/longest-arithmetic-progression-dp-35/
// https://en.wikipedia.org/wiki/Arithmetic_progression

// Time Complexity O(N^2)
// Space Complexity O(N^2)
var longestArithmeticSubsequence = function(nums) {
    if(nums.length < 3) {
        return nums.length;
    }

    let max = 2;
    let n = array.length;

    nums.sort((a,b) => a - b); // We need to have the numbers sorted

    // Create the table
    let dp = new Array(n);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(dp.length).fill(0);
    }

    // initialize dp[i][n - 1] = 2
    for(let i = 0; i < n; i++) {
        dp[i][n-1] = 2;
    }

    // fix j (consider every nums[j] as second element of AP) to search for valid i & k
    for (let j = n - 2; j >= 1; j--) {
        let i = j - 1, k = j + 1;
        while (i >= 0 && k < n) {
            if (nums[i] + nums[k] < 2 * nums[j]) {
                k++;
            } else if (nums[i] + nums[k] > 2 * nums[j]) {
                dp[i][j] = 2;
                i--;
            } else {
                dp[i][j] = dp[j][k] + 1;
                max = Math.max(max, dp[i][j]);
                i--;
                k++;
            }
        }
        // If the loop was stopped due to k becoming more than n-1, set the remaining entties in column j as 2
        while (i >= 0)      dp[i--][j] = 2;
    }
    return max;
}

// array = [1, 7, 10, 15, 27, 29]; // output = 3
// The longest arithmetic progression is {1, 15, 29}


array = [5, 10, 15, 20, 25, 30];
// output = 6

console.log(longestArithmeticSubsequence(array));