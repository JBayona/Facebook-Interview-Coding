/*
Invert a binary tree.
     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
https://leetcode.com/problems/invert-binary-tree/description/
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

var invertTree = function(root) {
  // Base case
  if(!root) {
      return null;
  };
  // This is to avoid override changes
  let tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);
  return root;
};

// Stack
// Iterative O(N) space and time
var invertTree = function(root) {
  if(!root) {
      return root;
  }
  
  let stack = [];
  stack.push(root);
  while(stack.length) {
    let current = stack.pop();
    let left = current.left || null;
    current.left = current.right;
    current.right = left;
    
    if(current.left) {
        stack.push(current.left);
    }
    if(current.right) {
        stack.push(current.right);
    }
  }
  
  return root;
};

var invertTree = function(root) {
  if(!root) return root;
  let left;
  let right;
  if(root.left) {
     left = invertTree(root.left);
  }
  if(root.right) {
    right = invertTree(root.right);
  }
  root.left = right || null;
  root.right = left || null;
  return root;
};

tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
//tree = new TreeNode(1,new TreeNode(2));
console.log(invertTree(tree));

















