/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    2
   / \
  1   3
Binary tree [2,1,3], return true.
Example 2:
    1
   / \
  2   3
Binary tree [1,2,3], return false.

https://leetcode.com/problems/validate-binary-search-tree/description/
*/

//Option 1

function Tree(val, left, right){
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

var isValidBST = function(root) {
  return checkBST(root, Number.MAX_SAFE_VALUE, Number.MIN_SAFE_VALUE);
};

function checkBST(node, MIN, MAX){
  if(node === null) return true;
  if(node.val <= MIN || node.val >= MAX) return false;
  return checkBST(node.left, MIN, node.val) && checkBST(node.right, node.val, MAX);
}

// Option 2

// Walk inorder + prev value
let prev = null;
var isValidBST = function(root) {
  // Base case
  if(!root) return true;

  // Left
  if(root.left) {
    if(!isValidBST(root.left)) return false;
  }

  // Action
  if(prev !== null && prev >= root.val) {
    return false;
  }

  // Right
  if(root.right) {
    if(!isValidBST(root.right)) return false;
  }

  return true;

};

tree = new Tree(1,new Tree(1));
console.log(isValidBST(tree));