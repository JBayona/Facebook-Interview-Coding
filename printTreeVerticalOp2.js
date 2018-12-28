/*
https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/
*/

// Node 
function Node(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

/* Keep track of the current level and store it in a hash, the
key is the hd (high distance)*/
function findDistanceFromRoof(node, hd, hash) {

  // Base case
  if(!node) {
    return;
  }

  // Add the values in the hash
  if(hd in hash) {
    hash[hd].push(node.val);
  }else {
    hash[hd] = [node.val];
  }

  //Visit the left and right subtrees
  findDistanceFromRoof(node.left, hd - 1, hash);
  findDistanceFromRoof(node.right, hd + 1, hash);
}


function printVertical(tree) {
  let hash = {};
  let level = 0;

  findDistanceFromRoof(tree, level, hash)
  // Print by level, the orden is not guaranteed
  for(key in hash){
    console.log(hash[key].join(' '));
  }
}

/*
        1
    2      3
  4    5 6    7
           8   9
*/
let tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6, null, new Node(8)), new Node(7, null, new Node(9))));
printVertical(tree);
