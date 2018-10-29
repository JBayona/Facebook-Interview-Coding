/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

https://leetcode.com/problems/binary-search-tree-iterator/description/
*/


// INORDER ITERATOR
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


var BSTIterator = function(root) {
    this.stack = [];
    this.pushAll(root);
};


// Function to push the most left element into the stack
BSTIterator.prototype.pushAll = function(root) {
    while(root) {
        this.stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return !(this.stack.length === 0);
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let node = this.stack.pop();
    // Insert right nodes in our stack considering also the left nodes
    this.pushAll(node.right);
    return node.val;
};

root = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7))), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))));


/**
 * Your BSTIterator will be called like this:
**/
var  i = new BSTIterator(root);
a = [];
while(i.hasNext()) {
    a.push(i.next());
}
console.log(a);


/** Including All **/

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


var BSTIterator = function(root) {
    this.stack = [];
    this.pushAll(root);
};


// Function to push the most left element into the stack
BSTIterator.prototype.pushAll = function(root) {
    while(root) {
        this.stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return !(this.stack.length === 0);
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let node = this.stack.pop();
    // Insert right nodes in our stack considering also the left nodes
    this.pushAll(node.right);
    return node.val;
};

BSTIterator.prototype.all = function() {
    let result = [];
    while(this.hasNext()) {
        result.push(this.next());
    }
}
