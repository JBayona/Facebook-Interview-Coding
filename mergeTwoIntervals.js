/*
Given A and B two interval lists, A has no overlap inside A and B has no overlap inside B. Write the function to merge two interval lists, output the result with no overlap. Ask for a very efficient solution

A naive method can combine the two list, and sort and apply merge interval in the leetcode, but is not efficient enough.

For example,
A: [1,5], [10,14], [16,18]
B: [2,6], [8,10], [11,20]

output [1,6], [8, 20]

*/

// Time complexity O(m + n)
// Space complexity O(m + n )
function mergeInterval(intervalA, intervalB) {
  let res = [];
  let lastInterval = [];
  let current = [];

  let indexA = 0;
  let indexB = 0;

  // Two pointers
  while(indexA < intervalA.length && indexB < intervalB.length) {
   let elementsA = intervalA[indexA];
   let elementsB = intervalB[indexB];

   // Current always has the less element
   if(elementsA[0] < elementsB[0]) {
    current = elementsA;
    indexA++
   } else {
    current = elementsB;
    indexB++
   }

  lastInterval = mergeIntervals(res, lastInterval, current);
  }

  // We still need to iterate for the remaining elements on interval A
  while (indexA < intervalA.length) {
    lastInterval = mergeIntervals(res, lastInterval, intervalA[indexA]);
    indexA++;
  }

  // We still need to iterate for the remaining elements on interval B
  while (indexB < intervalB.length) {
    lastInterval = mergeIntervals(res, lastInterval, intervalB[indexB]);
    indexB++;
  }
        
  if (lastInterval !== null) {
      res.push(lastInterval);
  }
  return res;
}

function mergeIntervals(res, lastInterval, current) {
  // The very first merge
  if(!lastInterval.length) {
   return current;
  }

  // current.start > lastInterval.end
  if(current[0] > lastInterval[1]) {
   res.push(lastInterval);
   return current
  }

  lastInterval[1] = Math.max(lastInterval[1], current[1]);
  return lastInterval;
}

// intervalA = [[1,5], [10,14], [16,18]];
// intervalB = [[2,6], [8,10], [11,20]];
// [1,6], [8, 20]

// intervalA = [];
// intervalB = [[2,6], [8,10], [11,20]];
// [2,6], [8,10], [11,20]

intervalA = [[1,2], [3, 4], [6, 7], [15, 18], [21, 22]];
intervalB = [[2,6], [8,10], [11,20]];
// [[1, 7], [8,10], [11, 20], [21, 22]]
console.log(mergeInterval(intervalA, intervalB));