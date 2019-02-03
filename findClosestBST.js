/*
Given a binary search tree and a target node K. The task is to find the node with minimum absolute difference with given target value K.

https://www.geeksforgeeks.org/find-closest-element-binary-search-tree/
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}


// Opción 1 (Use benefit of BST properties)
function findDiff(node, n) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = {num: 0};

  helper(node, minDiff, result, n);
  return result.num;
}

function helper(node, minDiff, result, n) {
  // Base case
  if(!node) {
    return;
  }

  if(node.val === n) {
   result.num = 0;
   return;
  }

  if(minDiff > Math.abs(n - node.val)) {
   minDiff = Math.abs(n - node.val);
   result.num = node.val;
  }

  if(n < node.val) {
    helper(node.left, minDiff, result, n);
  } else {
    helper(node.right, minDiff, result, n);
  }
}

// Opción 2
// Time O(h)
// Space O(N)
function findDiff(node,n) {
  let array = [];
  inorder(node, array)

  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = 0;

  for(let i = 0; i < array.length; i++) {
    if(minDiff > Math.abs(n - array[i])) {
      minDiff = Math.abs(n - array[i]);
      result = array[i];
   }
}

return result;
}

function inorder(node, array) {
  if(!node) return;

  inorder(node.left, array);
  array.push(node.val);
  inorder(node.right, array);
}

/*
         9
     4       17
  3     6       22
       5  7   20
*/
tree = new TreeNode(9, new TreeNode(4, new TreeNode(3), new TreeNode(6, new TreeNode(5), new TreeNode(7))), new TreeNode(17, null, new TreeNode(22, new TreeNode(20))));
n = 8;
console.log(findDiff(tree, n));