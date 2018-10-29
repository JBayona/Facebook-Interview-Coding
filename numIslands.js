/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by
water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the
grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

https://leetcode.com/problems/number-of-islands/description/
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Array(grid.length);
    let count = 0;
    for(let i = 0; i < visited.length; i++) {
        visited[i] = new Array(grid[i].length).fill(false);
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1' && !visited[i][j]) {
                visited[i][j] = true;
                dfs(grid, visited, i, j);
                count++;
            }
        }
    }
    return count;
};

function dfs(grid, visited, x, y) {
    let nextX = [-1, 0, 0, 1];
    let nextY = [-0, -1, 1, 0];
    
    for(let i = 0; i < 4; i++) {
        let moveX = x + nextX[i];
        let moveY = y + nextY[i];
        if(isSafe(grid, visited, moveX, moveY)) {
            visited[moveX][moveY] = true;
            dfs(grid, visited, moveX, moveY);
        }
    }
}

function isSafe(grid, visited, x, y) {
    return(
        x >= 0 && x < grid.length &&
        y >= 0 && y < grid[0].length &&
        grid[x][y] === '1' &&
        !visited[x][y]
    );
}