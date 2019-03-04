/* Implement a stack using Linked List */

/*Implement stack*/

var Node = function(data) {
    this.data = data;
    this.next = null;
}

function Stack(){
  this.top = null;
}

Stack.prototype.pop = function() {
  // If stack is not empty
  if(this.top) {
    // Get the top of the stack
    let item = this.top.data;
    // Update our top with the next of our stack
    this.top = this.top.next;
    return item;
  }
  return null;
}

Stack.prototype.push = function(data) {
  // Create new top of stack
  let node = new Node(data);
  // Link our new node with the rest of the stack
  node.next = this.top;
  // Update our stack with the new node
  this.top = node;
}

Stack.prototype.peek = function() {
if(!this.top) {
   return -1;
  }
  return this.top.data;
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.peek());
console.log(stack);