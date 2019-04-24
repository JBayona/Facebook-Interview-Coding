/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to
the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13


https://leetcode.com/problems/most-frequent-subtree-sum/submissions/

*/

var findFrequentTreeSum = function(root) {
    let result = [];
    let hash = {};
    let freq = [0];
    // Get the sum of the subtree
    getSumSubtrees(root, hash, freq);
    
    // Here we'll get only those sums with the same frequency as "freq"
    for(let sum in hash) {
        if(hash[sum] === freq[0]) {
            result.push(sum);
        }
    }
    return result;
};



function getSumSubtrees(node, hash, freq){
    // Base case
    if(!node){
        return 0;
    }
    
    let left = getSumSubtrees(node.left, hash, freq);
    let right = getSumSubtrees(node.right, hash, freq);
    let sum = left + right + node.val;

    if(sum in hash) {
        hash[sum]++;
    } else {
        hash[sum] = 1;
    }

    // Get the max frequency of the current sum of the previous registered
    // This will help us to only track from our elements those with the same
    // frequency registered.
    freq[0] = Math.max(freq[0], hash[sum]);
    return sum;
}
