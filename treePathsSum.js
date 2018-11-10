/*
Given a binary tree, where every node value is a Digit from 1-9 .Find the sum of all the numbers which are formed from root to leaf paths.
For example consider the following Binary Tree.

                                          6
                                      /      \
                                    3          5
                                  /   \          \
                                 2     5          4  
                                      /   \
                                     7     4
  There are 4 leaves, hence 4 root to leaf paths:
   Path                    Number
  6->3->2                   632
  6->3->5->7               6357
  6->3->5->4               6354
  6->5>4                    654   
Answer = 632 + 6357 + 6354 + 654 = 13997 

https://www.geeksforgeeks.org/sum-numbers-formed-root-leaf-paths/
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function treePathsSum(root) {
  return helper(root, 0);
}

// Traverse inorder
function helper(node, val) {

  // Base case
  if(!node) return 0;
  
  // Update value
  val = (val * 10) + node.val;
  
  // Check if we reach leaf node to return the value
  if(!node.left && !node.right) {
    return val;
  }

  return helper(node.left, val) + helper(node.right, val);
}


tree = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(5, new TreeNode(7), new TreeNode(4))), new TreeNode(5, null, new TreeNode(4)));
console.log(treePathsSum(tree));