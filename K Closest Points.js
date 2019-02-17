/*
Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)

https://leetcode.com/problems/k-closest-points-to-origin/
*/
// https://www.cs.bgu.ac.il/~ds122/wiki.files/Presentation09.pdf
// Reference: https://en.wikipedia.org/wiki/Euclidean_distance
// https://www.youtube.com/watch?v=eaYX0Ee0Kcg
// O(N log N)

// NOTE: We can user a max heap too (max heap has the root as greater element)
var kClosest = function(points, K) {
    
    if(!points.length || !K) {
        return [];
    }
    
    let origin = [0,0];
    let array = [];
    let result = [];
    for(let i = 0; i < points.length; i++) {
        array.push({coordinate: points[i], distance: getEuclideanDistance(points[i], origin)});
    }
    
    // Custom sort - comparator using distance for sorting
    array.sort((a,b) => (a.distance - b.distance));
    
    // Create the array result
    for(let i = 0; i < K; i++) {
        result.push(array[i].coordinate);
    }
    
    return result;
};

// Euclidean distance
// Formula = Math.sqrt((a1 - b1)^2 + (a2 - b2)^2 + .... + (an - b2))
function getEuclideanDistance(a, b) {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}