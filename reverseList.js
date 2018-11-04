/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

https://leetcode.com/problems/reverse-linked-list/description/
*/

// iterative

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next
    
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};

// Recursive Option 1
var reverseList = function(head) {
    return helper(head, null);
};

function helper(current, newHead) {
    if(current === null) return newHead;
    let next = current.next;
    current.next = newHead;
    return helper(next, current);
}

// Recursive Option 2

var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next;
    
    return helper(prev, current, next);
};

function helper(prev, current, next) {
    if(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        return helper(prev, current, next)
    }
    return prev;
}