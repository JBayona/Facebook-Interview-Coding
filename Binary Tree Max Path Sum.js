/*

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

https://leetcode.com/problems/binary-tree-maximum-path-sum/

*/

// Opción 1

var maxPathSum = function(root) {
    // Result
    let result = {val: -10e5};
    findMaxPathSum(root, result);
    return result.val;
};

function findMaxPathSum(node, result) {
    if(!node) {
        return 0;
    }
    
    let left = findMaxPathSum(node.left, result);
    let right = findMaxPathSum(node.right, result);
    
    // Get max of single node, should include at lear one child
    // Could be only the single root node or root node + max one children
    let max_single = Math.max(Math.max(left, right) + node.val, node.val);
    
     // Max top is the sum
    // The max could the the one subtree that includes the root node also
    let max_top = Math.max(max_single, left + right + node.val);
    
    // Update the result
    // The new max is the prev result or our max of single node
    result.val = Math.max(result.val, max_top);
    
    // We need to return the max of each subtree so we can keep compute
    // This will be a repetitive process for all root nodes
    return max_single;
}

// Opción 2

let max = Number.MIN_SAFE_INTEGER;
var maxPathSum = function(root) {
    dfs(root);
    return max;
}
function dfs(root) {
    if (!root)   return 0;
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    max = Math.max(max, left + right + root.val);
    return Math.max(left, right) + root.val;
}