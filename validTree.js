/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write
a function to check whether theses edges make up a valid tree.

For example

Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

You can assume that no duplicates edges will appear in edges. Since all edges are undirected [0, 1] is the
same as [1, 0] and thus will not appear together in edges.

https://leetcode.com/problems/graph-valid-tree/

https://www.youtube.com/watch?v=n_t0a_8H8VY
https://www.youtube.com/watch?v=rFf4mXWbb9U
https://www.youtube.com/watch?v=ojge0iS19qQ
https://www.programcreek.com/2014/05/graph-valid-tree-java/
https://www.youtube.com/watch?v=vsIb9B84Rt8

Para ser un árbol válido debe estar conectado y no debe haber ciclos


Time: O(V) - V number of vertices
Space: O(V)
*/

var validTree = function(n, edges) {

  // Corner case
  if(edges.length !== n-1) return false;

  let graph = [];

  // Create the graph
  for(let i = 0; i < n; i++) {
    graph[i] = []
  }

  // Fill the undirected graph
  for(let i = 0; i < edges.length; i++) {
    // Destructuring
    // Insert both sides as the graph is undirected
    let [from, to] = edges[i];
    graph[from].push(to);
    graph[to].push(from);
  }

  // Visited edges
  let visited = new Array(n).fill(0);

  // Visit the first node
  visited[0] = true;
  // Check that there is no cycle
  if(dfs(graph, visited, 0, -1)) {
    return false;
  }

  // Check if all the graph is connected
  for(let i = 0; i < visited.length; i++) {
    if(!visited[i]) {
      return false;
    }
  }

  // All the graph is connected and there is no cycle at this point
  return true;
}

// Has cycle
function dfs(graph, visited, node, parent) {

  let sub = graph[node];
  for(let i = 0; i < sub.length; i++) {
    let v = sub[i];
    // Ignore if the node is coming from the father i.e [1,0], [0, 1]
    if(v === parent) continue;
    if(!visited[v]) {
      visited[v] = true;
      dfs(graph, visited, v, node);
    } else {
      // The node has been visited
      return true;
    }
  }
  // The node has not been visited
  return false;
}

n = 5;
// edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
console.log(validTree(n, edges));
