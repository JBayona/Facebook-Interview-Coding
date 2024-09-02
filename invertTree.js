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

// Recursion
var invertTree = function(root) {
  if (!root) {
      return null;
  }
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// Iterative BFS
var invertTree = function(root) {
  if (!root) {
      return null;
  }
  let queue = [];
  queue.push(root);
  
  while(queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
          let node = queue.shift();
          let left = node.left;
          let right = node.right;
          // Invert
          node.left = right;
          node.right = left;
          if (node.left) {
              queue.push(node.left);
          }

          if (node.right) {
              queue.push(node.right);
          }
      }
  }
  return root;
};

tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
//tree = new TreeNode(1,new TreeNode(2));
console.log(invertTree(tree));

















