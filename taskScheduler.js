/*
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.
Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals
that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

Greedy Approach
https://www.youtube.com/watch?v=ySTQCRya6B0
https://leetcode.com/articles/task-scheduler/
*/

class Solution {
    public int leastInterval(char[] tasks, int n) {
        // Greedy Approach
        // https://www.youtube.com/watch?v=ySTQCRya6B0
        // https://leetcode.com/articles/task-scheduler/
        HashMap<Character, Integer> map = new HashMap<>();
        for(char c: tasks) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        // Get the max element under the maxHeap in constant time
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b) -> b -a);
        // Throw all values into the max heap
        maxHeap.addAll(map.values());
        
        int cycles = 0;
        
        while(!maxHeap.isEmpty()) {
            List<Integer> tmp = new ArrayList<>();
            for(int i = 0; i <= n; i++) {
                if(!maxHeap.isEmpty()) {
                    tmp.add(maxHeap.remove());
                }
            }
            
            // Decrement the process and check if we still need to process more cycles
            // for example if A is 3, we need to process A, 3 times
            for(int i : tmp) {
                if(--i > 0) {
                    maxHeap.add(i);
                }
            }
            
            // n is the cool down
            cycles += maxHeap.isEmpty() ? tmp.size() : n + 1;
        }
        
        return cycles;
    }
}