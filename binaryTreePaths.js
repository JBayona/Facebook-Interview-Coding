/*

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

https://leetcode.com/problems/binary-tree-paths/description/

*/

var binaryTreePaths = function(root) {
  let result = [];
  dfs(root, '', result);
  return result;
};

// Walk preorder
function dfs(node, tmp, result){
  // Base case
  if(!node) return;
  
  // Preorder action
  tmp =  tmp ? tmp + '->' + node.val : node.val;
  if(!node.left && !node.right){
    // No es necesario limpiar porque a la vuelta rompera con el base case
     result.push(tmp);
  }
  dfs(node.left, tmp, result);
  dfs(node.right, tmp, result);
}

// Iterative preorder traversal
// Time complexity O(N) -- We touch every single node
// Space complexity O(N) -- Worst case we can have all nodes in the stack
function binaryTreePaths(root) {

  if(!root) {
    return [];
  }

  let node = root;
  // Stack to traverse preorder
  let stack = [];
  // Result to push the strings
  let result = [];
  // Stack of strings
  let paths = [];

  stack.push(node);
  paths.push(node.val + '');

  while(stack.length) {
   let current = stack.pop();
   // Path is the concatenation in preorder traversal
   let path = paths.pop();

   // Check if is leaf node (Action)
   if(!current.left && !current.right) {
    result.push(path.toString()); 
   }

   if(current.right) {
    stack.push(current.right);
    paths.push(path + '->' + current.right.val);
   }
   if(current.left) {
    stack.push(current.left);
    paths.push(path + '->' + current.left.val);
   }
  }

  return result;
}

// BFS
var binaryTreePaths = function(root) {
  if(!root) {
    return [];
  }

  let map = {} // (node, parent node);
  let queue = [];
  let queueStr = [];
  queue.push(root);
  queueStr.push("");
  map[root] = null;
  result = [];

  while(queue.length) {
    let node = queue.shift();
    let currStr = queueStr.shift();

    // Action
    console.log(node.val);
    // It´s a leaf node
    if(!node.left && !node.right) {
      //let str = getPaths(map, node);
      result.push(currStr + node.val);
    }


    if(node.left) {
      queue.push(node.left);
      queueStr.push(currStr + node.val + '->');
      map[node.left] = node;
    }
    if(node.right) {
      queue.push(node.right);
      queueStr.push(currStr + node.val + '->');
      map[node.right] = node;
    }
  }

  return result;
};

// Opción 1
function Node(val, left, right){
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}


var binaryTreePaths = function(root) {
    let result = [];
    let tmp = [];
    dfs(root, tmp, result);
    return result;
};

// Walk preorder
function dfs(node, tmp, result){
  // Or (!node) return
  if(node) {
      tmp.push(node.val);
      if(!node.left && !node.right){
          result.push(tmp.join('->'));
      }
      dfs(node.left, tmp.concat(), result);
      dfs(node.right, tmp.concat(), result);
  }
}

// Opción 2
function Node(val, left, right){
this.val = val;
this.left = left || null;
this.right = right || null;
}


var binaryTreePaths = function(root) {
    let result = [];
    let tmp = [];
    dfs(root, tmp, result);
    return result;
};

function dfs(node, helper, result){
    if(node) {
        helper.push(node.val);
        if(!node.left && !node.right){
            result.push(helper.join('->'));
        }
        dfs(node.left, [...helper], result);
        dfs(node.right,[...helper], result);
    }
}

tree = new Node(1, new Node(2, null, new Node(5)), new Node(3));
console.log(binaryTreePaths(tree));

// Opción 3

/*
         1
      2     3
    4  5   6  7

    Result = [1,2,3] [1,2,5] [1,3,6] [1,3,7]
*/

function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var getTreePaths = (node, array) => {
  if(!node) {
    console.log(' ');
    return;
  }
  array.push(node.val);
  if(node.left || node.right) {
    if(node.left) {
      getTreePaths(node.left, array);
    }
    if(node.right) {
      getTreePaths(node.right, array)
    }
  } else {
    console.log(array.join('->'));
  }
  array.pop();
}

tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
console.log(getTreePaths(tree, []));
