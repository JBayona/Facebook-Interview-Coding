/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// BST
var serialize = function(root) {
  if(!root) return '';
  let queue = [];
  let result = '';

  queue.push(root);

  while(queue.length) {
    let node = queue.shift();

    if(!node) {
      result = result + 'null ';
      continue;
    }

    result = result + node.val + ' ';
    // Do not check for existence so we can print null too
    queue.push(node.left);
    queue.push(node.right);
  }

  return result.trim();
};

var deserialize = function(data) {
  if (data === "") return null;
  let queue = [];

  let values = data.split(" ");
  let root = new TreeNode(parseInt(values[0]));
  queue.push(root);

  for (let i = 1; i < values.length; i++) {
    let parent = queue.shift();
    if (values[i] !== "null") {
      let left = new TreeNode(parseInt(values[i]));
      parent.left = left;
      queue.push(left);
    }
    if (values[++i] !== "null") {
      let right = new TreeNode(parseInt(values[i]));
      parent.right = right;
      queue.push(right);
    }
  }
  return root;
};


tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
let str = serialize(tree)
console.log(serialize(str));
let treeNew = deserialize(str);
console.log(treeNew);