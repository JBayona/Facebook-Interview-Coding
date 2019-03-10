/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and nrespectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

https://leetcode.com/problems/merge-sorted-array/

*/

var merge = function(nums1, m, nums2, n) {
  /*Empezamos de atrás para el nuevo arreglo*/
  while(m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      /*m + n - 1 porque tendra el tamaño de los
      dos arreglos*/
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  
  /*En caso de que el segundo arreglo sea mayor*/
  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
};

// Merge two sorted lists

//classic iterate
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);//dummy
  let p = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  if (l1) p.next = l1;
  if (l2) p.next = l2;
  return dummy.next;
} 

//recursive
function mergeTwoLists(l1, l2) {      
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
}

// Merge K LinkedLists
// O(nk Log k)
public class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
    if (lists.length == 0) return null;
    // Minheadp (El nodo es menor o igual al de sus hijos)
    PriorityQueue<ListNode> queue = new PriorityQueue<>(lists.length, (x, y) -> x.val - y.val);
    // push the head nodes of all the k lists in 'pq'  
    for (ListNode node : lists) {
        if (node != null) {
            queue.add(node);
        } 
    }

    // Nodo temporal
    ListNode head = new ListNode(0);
    ListNode p = head;
    // Mientras tengamos elementos en la pq
    while (!queue.isEmpty()) {
      // Saca el menor
      ListNode node = queue.poll();
      p.next = node;
      // Recorremos
      p = p.next;
      // Agregamos el next de nuestro nodo actual a la pq
      if (node.next != null) {
          queue.add(node.next);
      }
    }
    return head.next;
  }
}