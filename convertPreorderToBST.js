/*
https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function constructBSTFromPreorder(array) {
  let index = {prev: 0};
  return constructTreeUtil(array, 0, array.length - 1, index);
}

// O(n^2)
function constructTreeUtil(array, low, high, index) {
  // Base case
  if(index.prev >= array.length || low > high) {
   return;
  }

  // The first element in the preorder traversal is the node
  // So take tha node of preindex and make it root
  let root = new TreeNode(array[index.prev]);
  index.prev++;

  // If we have only one element, return
  if(low === high) {
   return root;
  }

  // Search for the first element greater than root, this is the right subtree
  // Find the first element that satisfies the condition
  let i = low;
  for(; i < array.length; i++) {
   if(array[i] > root.val) {
    break;
   }
  }

  root.left = constructTreeUtil(array, index.prev, i - 1, index);
  root.right = constructTreeUtil(array, i, high, index);

  return root;
}

// O(N)
let index = 0;
function constructBSTFromPreorder(array) {
  return constructTreeUtil(array, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function constructTreeUtil(array, min, max) {
  // Base Case
  if(index >= array.length) {
    return;
  }

  if(array[index] <= min || array[index] >= max) {
    return;
  }

  let root = new TreeNode(array[index++]);
  root.left = constructTreeUtil(array, min, root.val);
  root.right = constructTreeUtil(array, root.val, max);

  return root;
}

// O(N)
function constructBSTFromPreorder(array) {
  let index = {prev: 0};
  return constructTreeUtil(array, array[0], Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, index);
}

function constructTreeUtil(array, value, min, max, index) {
  // Base Case
  if(index.prev > array.length) {
    return;
  }

  if(value > min && value < max) {
    let root = new TreeNode(value);
    index.prev++;

    if(index.prev < array.length) {

      root.left = constructTreeUtil(array, array[index.prev], min, value, index);

      root.right = constructTreeUtil(array, array[index.prev], value, max, index);
    }

    return root;
  }
}


/*
          10
      5        40
    1   7         50
*/

/*
             10
           /    \
          /      \
  {5, 1, 7}       {40, 50}
*/

// Preorder array
array = [10, 5, 1, 7, 40, 50] ;
console.log(constructBSTFromPreorder(array));