/*
Given an array of meeting time intervalsof start and end times [[s1,ed], [s2, e2]..] determine if a person coudld attend al meetings

https://leetcode.com/problems/meeting-rooms/
https://www.youtube.com/watch?v=i2bBG7CaVxs
https://github.com/JBayona/Facebook-Interview-Coding-1/blob/master/253.%20Meeting%20Rooms%20II.java
*/

// Greedy algorithm
var canAttendMeetings = function(intervals) {
    // Sort the intervals per end time so we can check if collapses
    let sorted = intervals.sort((a,b) => a.end - b.end);
  
    for(let i = 1 ; i < intervals.length; i++) {
        if(sorted[i].start < sorted[i-1].end) {
            return false;
        }
    }
  
  return true;
};

//intervals = [{start: 0, end: 30}, {start: 5, end: 10}, {start: 15, end: 20}]; // false
intervals = [{start: 7, end: 10}, {start: 2, end: 4}]; // true
console.log(canAttendMeetings(intervals));

// Opción 2
var canAttendMeetings = function(intervals) {
    // Sort the intervals per end time so we can check if collapses
    let starts = [];
    let ends = [];

    for(let i = 0; i < intervals.length; i++) {
        starts[i] = intervals[i].start;
        ends[i] = intervals[i].end;
    }
  
    for(let i = 0 ; i < intervals.length - 1; i++) {
        if(start[i + 1] < ends[i]) {
            return false;
        }
    }
  
  return true;
};