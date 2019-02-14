/*
Given two pre-order traversal arrays of two binary search tree respectively, find first pair of non-matching leaves. 
Follow Up: If they are general binary trees instead of BSTs, could you solve it? give out your reason. 

For the first question, I was thinking to construct two BSTs from pre-order traversal then do a leaf-level comparison. Any better solutions are welcome.

https://www.careercup.com/question?id=5692379756494848
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// http://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/
function findNotMatchingLeaf(preorder1, preorder2) {
  index = 0;
  let tree1 = constructBSTFromPreorder(preorder1);
  index = 0;
  let tree2 = constructBSTFromPreorder(preorder2);

  let leaves1 = [];
  let leaves2 = [];
  let result = [];

  preorder(tree1, leaves1);
  preorder(tree2, leaves2);

  // Compare the first pair
  for(let i = 0; i < Math.min(leaves1.length, leaves2.length); i++) {
   if(leaves1[i] !== leaves2[i]) {
    result[0] = leaves1[i];
    result[1] = leaves2[i];
    return result;
   }
  }
  return result;
}

// O(N)
function constructBSTFromPreorder(array) {
  return constructTreeUtil(array, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function constructTreeUtil(array, min, max) {
  // Base Case
  if(index >= array.length) {
    return null;
  }

  if(array[index] <= min || array[index] >= max) {
    return null;
  }

  let root = new TreeNode(array[index++]);
  root.left = constructTreeUtil(array, min, root.val);
  root.right = constructTreeUtil(array, root.val, max);

  return root;
}

function preorder(node, array) {
  if(!node) {
   return;
  }
  array.push(node.val);
  preorder(node.left, array);
  preorder(node.right, array);
}

preorder1 = [5, 2, 10, 11, 7];
preorder2 = [5, 2, 10, 11];
console.log(findNotMatchingLeaf(preorder1, preorder2));