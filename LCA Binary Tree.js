/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between 
two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
         
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5
since a node can be a descendant of itself according to the LCA definition.

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
https://www.youtube.com/watch?v=13m9ZCB8gjw
*/

// O(N) time and O(N) space

var lowestCommonAncestor = function(root, p, q) {
    
  if(p === null || q === null) {
    return -1;
  }
    
  let path1 = [];
  let path2 = [];

  let isFoundPath1 = findPath(root, p, path1);
  let isFoundPath2 = findPath(root, q, path2);

  // Check if both paths were found, if not, return error
  if(!isFoundPath1 || !isFoundPath2) {
   return -1;
  }

  // If we reach this point, it means we found both nodes
  // Let's find the ancestor comparing paths one by one
  let i = 0;
  while((path1[i] && path2[i]) && (path1[i].val === path2[i].val)) {
   i++;
  }

  // Return once we find a different element, that's the ancestor
  // We could use any of those arrays
  return path1[i-1];
};

// Find path from root to specific node
function findPath(root, node, arr) {
  // Base case
  if(!root) {
    return;
  }

  arr.push(root);
  if(root.val === node.val) {
    return true;
  }

  // Look in both sides
  let wasFound = findPath(root.left, node, arr) || findPath(root.right, node, arr);
  if(wasFound) {
    return true;
  }

  // Node was not found, remove from array the element and keep recursion
  arr.pop();
  return false;
}

// O(N) time and O(1) space

var lowestCommonAncestor = function(root, p, q) {
  // Base case
  if(root === null) {
    return null;
  }

  // If we found a node while traversing, return it
  if(root.val === p.val || root.val === q.val) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // If we have nodes from both, left and right, means that we
  // have found the lowest common ancestor
  // Means this is the LCA, return the current node
  if(left && right) {
    return root;
  }

  // If we reach this point it means that we have null in left or right node
  // so let's return to the parent the one is not null
  return left ? left : right;
};


var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;
    if(root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p,q);
    let right = lowestCommonAncestor(root.right, p,q);
    if(left !== null && right !== null) return root;
    if(left === null && right === null) return null;
    return left !== null ? left : right;
};