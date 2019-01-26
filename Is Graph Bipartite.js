/*
Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation: 
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.
Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation: 
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.

// https://leetcode.com/problems/is-graph-bipartite/discuss/161001/Java-Graph-Coloring-BFS-with-Explanation
*/

// DFS
// Time complexity: O(V+E)
// Space complexity: O(V)
var isBipartite = function(graph) {
  let n = graph.length;
  let colors = new Array(n).fill(0);

  // Check all nodes
  for (let i = 0; i < n; i++) {
    if (colors[i] == 0 && !dfs(graph, colors, i, 1)) {
      return false;
    }
  }
  return true;
}

function dfs(graph, colors, node, color) {
  // Mark node as visited
  colors[node] = color;
  for(let i = 0; i < graph[node].length; i++) {
    let next = graph[node][i];
    // if the next node has the same color, then return false
    if (colors[next] == colors[node]) {
        return false;
    }
    // if the next node hasn't been dyed, check it can be successfully
    if (colors[next] == 0 && !dfs(graph, colors, next, -color)) {
        return false;
    }
  }
  return true;
}

// BFS
// Time complexity: O(V+E)
// Space complexity: O(V)
var isBipartite = function(graph) {
  let n = graph.length;
  let colors = new Array(n).fill(0);
  
  let queue = [];

  for(let i = 0; i < n; i++) {
    // If it's not visited
    if(colors[i] === 0) {
      queue.push(i);
      colors[i] = 1;
      
      while(queue.length) {
        let node = queue.shift();
        let nextColor = -colors[node];
        for(let i = 0; i < graph[node].length; i++) {
          let next = graph[node][i];
          // If it's not visited
          if(colors[next] === 0) {
            queue.push(next);
            colors[next] = nextColor; 
          } else if(colors[next] === colors[node]) {
            // If we have the same color as the prev node, it's not a bipartite graph
            return false;
          }
        }
      }
    }
  }
  return true;
}

graph = [[1,3], [0,2], [1,3], [0,2]]; // true
//graph = [[1,2,3], [0,2], [0,1,3], [0,2]]; // false
console.log(isBipartite(graph));