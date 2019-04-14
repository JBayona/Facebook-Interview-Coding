/*

BFS

https://www.geeksforgeeks.org/minimum-steps-reach-target-knight/

Given a square chessboard of N x N size, the position of Knight and position of a target is given.
We need to find out minimum steps a Knight will take to reach the target position.

*/
function minStepToReachTarget(N, knightPost, targetPost) {
    let visited = new Array(N + 1);
    for(let i = 0; i < N + 1; i++) {
      visited[i] = new Array(N + 1).fill(false);
    }

    // Control the status of the queue
    let queue = [];

    // Places where the knight in chess (guerrero) can move
    let row = [2, 2, -2, -2, 1, 1, -1, -1];
    let col = [1, -1, 1, -1, 2, -2, 2, -2];
    // Add first element in the queue
    queue.push(new Node(knightPost[0], knightPost[1], 0));
    // Mark as visited the first element
    visited[knightPost[0]][knightPost[1]] = true;

    // Loop until we have one element in the queue
    while(queue.length) {
      let node = queue.shift();

      // If the location is the same, return the 
      // distance, this is our goal
      if(node.x === targetPost[0] && node.y === targetPost[1]) {
        return node.distance;
      }

      // Return on all the possible states
      for(let i = 0; i < 8; i++) {
        let rowK = node.x + row[i];
        let colK = node.y + col[i];

        // If the cell has not been visited and the move is
        // inside the board
        if(isInside(rowK, colK, N) && !visited[rowK][colK]) {
          visited[rowK][colK] = true;
          queue.push(new Node(rowK, colK, node.distance + 1));
        }
      }
    }

    return -1;
}

function Node(x, y, distance) {
    this.x = x;
    this.y = y;
    this.distance = distance;
}

// Checks whether given position is  
// inside the board 
function isInside(x, y, N) { 
  if (x >= 1 && x <= N && y >= 1 && y <= N) {
    return true;
  }
  return false;
}

function isSafe(row, col, N, visited) {
  return (
    (row >= 0 && row < N) &&
    (col >= 0 && col < N) &&
    (visited[row][col] === false)
  );
}


N = 30;
knightPost = [1, 1];
targetPost = [30, 30];
console.log(minStepToReachTarget(N, knightPost, targetPost));