/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.


https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/

var maxDepth = function(root) {
    return heightTree(root);
};

function heightTree(root){
    if(root === null){
        return 0;
    }
    let left = heightTree(root.left);
    let right = heightTree(root.right);
    return Math.max(left, right) + 1;
}
