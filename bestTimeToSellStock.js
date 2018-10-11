/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(!prices.length) return 0;
    
    let min = prices[0];
    let result = 0;
    
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) min = prices[i]
        else result = Math.max(result, prices[i] - min)
    }
    return result;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {  
    // Kadane's Algorithm
    /*
	    All the straight forward solution should work, but if the interviewer twists the question slightly by giving the
	    difference array of prices, Ex: for {1, 7, 4, 11}, if he gives {0, 6, -3, 7}, you might end up being confused.
		Here, the logic is to calculate the difference (maxCur += prices[i] - prices[i-1]) of the original array, and find
		a contiguous subarray giving maximum profit. If the difference falls below 0, reset it to zero.

		I spent some time convincing myself about why we need to reset to zero. By reseting maxCur to 0, essentially it
		means that we have found a point i where the price[i] is lower than the time we bought, and that we should then try
		to buy at point i to see if we can achieve a bigger gain. Because maxCur is recording the difference, the
		difference between price[i] and itself should be 0
    */
    let currentMax = 0;
    let maxSoFar = 0;
    for(let i = 1; i < prices.length; i++) {
        currentMax += prices[i] - prices[i-1];
        currentMax = Math.max(0, currentMax);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
};

/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you
like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

*/

var maxProfit = function(prices) {
    let result = 0;
    for(let i = 1; i < prices.length; i++) {
        // Math with 0 to reset in case it's a negative number
        result += Math.max(0, prices[i] - prices[i-1]);
    }
    return result;
};