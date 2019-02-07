/*
// http://articles.leetcode.com/convert-binary-search-tree-bst-to/

When I first see this problem, my first thought was in-order traversal. Couldn’t we modify the nodes’ left and right pointers as we
do an in-order traversal of the tree? However, we have to beware not to modify the pointers and accessing it at a later time.

As we traverse the tree in-order, we could safely modify a node’s left pointer to point to the previously traversed node as we
never use it once we reach a node. We would also need to modify the previously traversed node’s right pointer to point to the current
node. Note: The previously traversed node meant here is not its parent node. It is the node’s previous smaller element.

Easy approach, right? But wait, we are still missing two more steps. First, we did not assign the list’s head pointer. Second, the last
element’s right pointer does not point to the first element (similar to the first element’s left pointer).

How do we solve this? My approach is pretty easy: Just update the current node’s right pointer to point back to the head and the head’s
left pointer to point to current node in each recursive call. As the recursion ends, the list’s head and tail would be automagically
updated with the correct pointers. Don’t forget to check for this special case: A list with only one element should have its left and
right pointers both pointing back to itself.


A double-linked list with a length of one.
Do you think this approach works? I bet it did! The run time complexity for this solution is O(N) since we are essentially
doing a modified in-order traversal. It does have some extra assignments in each recursive call though. But overall I am quite
satisfied with this approach because it is intuitive and easy to follow. Besides, we are adapting an existing
algorithm (in-order traversal) to solve this problem, isn’t this just neat?
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// O(n) time, O(h) space
let prev = null;
let head = null;
function convertBSTtoCircularDL(tree) {
  inorder(tree);
  return head;
}

function inorder(node) {
  if(!node) return;

  inorder(node.left);

  node.left = prev;
  if(prev) {
    prev.right = node; // previous node's right points to current node
  } else {
    head = node;
  }

  // current node (smallest element) is head of
  // the list if previous node is not available
  // as soon as the recursion ends, the head's left pointer 
  // points to the last node, and the last node's right pointer
  // points to the head pointer.

  let right = node.right;

  // This is to point the last element and the heas od the list
  // In each recursion we update the values
  head.left = node;
  node.right = head;

  // Update previous node
  prev = node;

  inorder(right);
}

tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5));
console.log(convertBSTtoCircularDL(tree));