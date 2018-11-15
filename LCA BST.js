/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

https://www.youtube.com/watch?v=TIoCCStdiFo

*/

// Time O(h) with O(h) space for call stack
var lowestCommonAncestor = function(root, p, q) {
  // Base Case
  if(!root) return;
  
   /* if p and q are greater than root, LCA is in
   the right side*/
  if(root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  
  /* if p and q are smaller than root, LCA is in
   the left side*/
  if(root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
}

// Time O(h) with O(h) space for call stack
var lowestCommonAncestor = function(root, p, q) {
  // Base Case
  if(!root) return;
  
  if(root.val > Math.max(p.val, q.val)) {
    return lowestCommonAncestor(root.left, p, q);
  } else if(root.val < Math.min(p.val, q.val)) {
    return lowestCommonAncestor(root.right, p, q);
  } else{
    return root;
  } 
};

// Time O(h) with O(1)
// Iterative
var lowestCommonAncestor = function(root, p, q) {
  while(root) {
    if(root.val < p.val && root.val < q.val) {
        root = root.right;
    } else if(root.val > p.val && root.val > q.val) {
        root = root.left;
    } else {
        break;
    }
  }
  return root;
};


/*
       5
    3     7
  2   4  6  8
*/
tree = new TreeNode(5,new TreeNode(3, new TreeNode(2, new TreeNode(4))), new TreeNode(7, new TreeNode(6), new TreeNode(8)));
n1 = 2;
n2 = 4; //Output 3
console.log(LCABST(tree,n1,n2));