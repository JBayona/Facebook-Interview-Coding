/*
https://www.geeksforgeeks.org/print-binary-tree-vertical-order/
O(n^2)
*/

// Node 
function Node(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function Values() {
  this.min = 0;
  this.max = 0
}

/* Find the min and max distance between the root
node and the level, the root node is level 0, the 
first left child will be -1, next left will be -2
and so on, for right child will be 1, then 2 and so
on */
function findMinMaxDistance(node, values, hd) {

  // Base case
  if(!node) {
    return;
  }

  //Update min and max
  if (hd < values.min) {
    values.min = hd;
  } else if (hd > values.max) {
    values.max = hd;
  }

  //Visit the left and right subtrees
  findMinMaxDistance(node.left, values, hd - 1);
  findMinMaxDistance(node.right, values, hd + 1);
}


/* Print all the tree by levels if the line
match with the current level */
function printVerticalTree(tree, line, hd) {

  //Base case
  if(!tree) {
    return;
  }

  // The current line is the same of our tree
  if(line === hd) {
    console.log(tree.val);
  }

  printVerticalTree(tree.left, line, hd - 1);
  printVerticalTree(tree.right, line, hd + 1);
}



function printVertical(tree) {
  let values = new Values();
  // Find the min and max levels of the tree following the root
  findMinMaxDistance(tree, values, 0)

  for(let i = values.min; i <= values.max; i++) {
    printVerticalTree(tree, i, 0)
    console.log('\n');
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