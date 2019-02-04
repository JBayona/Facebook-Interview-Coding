/*
Shortest distance between two cells in a matrix or grid
Given a matrix of N*M order. Find the shortest distance from a source cell to a destination cell, traversing through limited cells only. Also you can move only up, down, left and right. If found output the distance else -1.
s represents ‘source’
d represents ‘destination’
* represents cell you can travel
0 represents cell you can not travel
This problem is meant for single source and destination.


https://www.geeksforgeeks.org/shortest-distance-two-cells-matrix-grid/
*/

function Item(row, col, distance) {
  this.row = row || null;
  this.col = col || null;
  this.distance = distance || 0;
}

function findShortestPath(grid) {

  let ROW = grid.length;
  let COL = grid[0].length;
  let visited = [];

  // Form our visited matrix
  for(let i = 0; i < ROW; i++) {
   visited[i] = new Array(COL).fill(false);
  }

  let source = new Item();

  for(let i = 0 ; i < ROW; i++) {
    for(let j = 0; j < COL; j++) {
      if(grid[i][j] === '0') {
        visited[i][j] = -1;
      } else {
        visited[i][j] = 0;
      }

      // Find the source
      if(grid[i][j] === 's') {
        source.row = i;
        source.col = j;
      }
    }
  }

  // Apply BFS on matrix cell starting from source
  let queue = [];
  queue.push(source);
  visited[source.row][source.col] = 0;

  // Move left, up, right, down
  let rowK = [0, -1, 0, 1];
  let colK = [-1, 0, 1, 0];

  while(queue.length) {
   let item = queue.shift();
   let row = item.row;
   let col = item.col;

    for(let i = 0; i < 4; i++) {
      let rowNext = row + rowK[i];
      let colNext = col + colK[i];

      if(isSafe(grid, visited, rowNext, colNext)) {

        if(grid[rowNext][colNext] === 'd') {
          return item.distance + 1;
        }
        // Where we come + 1 as is a new step
        visited[rowNext][colNext] = visited[row][col] + 1;
        // distance has the updated number
        let distance = visited[rowNext][colNext];
        // Mark as visited in the grid
        grid[rowNext][colNext] = 'V'
        queue.push(new Item(rowNext, colNext, distance));
      }
    }
  }

  console.log(grid);
  console.log(source);
  return visited;
}

function isSafe(grid,visited,row,col){
  let ROW = grid.length;
  let COL = grid[0].length;
  return (
   (row >= 0 && row < ROW) && 
   (col >= 0 && col < COL) &&
   // To me available spaces or destination
   (grid[row][col] === '*' || grid[row][col] === 'd') &&
   // We have not visited yet
   visited[row][col] !== -1
  );
}

// 0 - wall
// * - free, can move
// s - source
// d - destination
grid = [
['0', '*', '0', 's'],
['*', '0', '*', '*'],
['0', '*', '*', '*'],
['d', '*', '*', '*']
];
console.log(findShortestPath(grid));