/*
https://www.geeksforgeeks.org/print-a-binary-tree-in-vertical-order-set-3-using-level-order-traversal/
*/

/*
Time Complexity of above implementation is O(n Log n). Note that above implementation uses map which is implemented using self-balancing BST.

We can reduce time complexity to O(n) using unordered_map. To print nodes in desired order, we can have 2 variables denoting min and max horizontal distance. We can simply iterate from min to max horizontal distance and get corresponding values from Map. So it is O(n)

Auxiliary Space : O(n)
*/

// Node 
function Node(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// function to print vertical order traversal of binary tree
function verticalTraverse(root) {
  // Base case
  if(!root) {
    return;
  }

  // Create empty queue for level order traversal 
  let queue = [];

  // create a map to store nodes at a particular 
  // horizontal distance 
  let map = {};

  // map to store horizontal distance of nodes 
  let hd_node = {};

  // enqueue root 
  queue.push(root) 
  // store the horizontal distance of root as 0 
  hd_node[root.val] = 0
  
  map[0] = [root.val] 
  
  // loop will run while queue is not empty 
  while (queue.length) {
  
    // dequeue node from queue 
    temp = queue.pop(); 

    if (temp.left) { 
      // Enqueue left child 
      queue.push(temp.left);

      // Store the horizontal distance of left node 
      // hd(left child) = hd(parent) -1
      hd_node[temp.left.val] = hd_node[temp.val] - 1;
      hd = hd_node[temp.left.val] 

      if(!(hd in map)) {
        map[hd] = [temp.left.val];
      } else {
        map[hd].push(temp.left.val);
      }
    }

    if (temp.right) {
      // Enqueue right child 
      queue.push(temp.right);

      // store the horizontal distance of right child 
      // hd(right child) = hd(parent) + 1 
      hd_node[temp.right.val] = hd_node[temp.val] + 1;
      hd = hd_node[temp.right.val];

      if(!(hd in map)) {
        map[hd] = [temp.right.val];
      } else {
        map[hd].push(temp.right.val);
      }
    }

  }
    /*
    0: (3) [1, 6, 5]
    1: (2) [3, 8]
    2: [7]
    3: [9]
    -1: [2]
    -2: [4]
    */
    console.log(map);
    /* {1: 0, 2: -1, 3: 1, 4: -2, 5: 0, 6: 0, 7: 2, 8: 1, 9: 3} */
    console.log(hd_node);
    // Sort the map according to horizontal distance 
    sorted_keys = Object.keys(map).map(item => parseInt(item)).sort((a,b) => a - b);
    
    //Traverse the sorted map and print nodes at each horizontal distance 
    for(let i = 0; i < sorted_keys.length; i++) {
      if(sorted_keys[i] in map) {
        console.log(map[sorted_keys[i]]);
      }
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
verticalTraverse(tree);