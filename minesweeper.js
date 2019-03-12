/*
Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealedsquares ('M' or 'E'), return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
 

Example 1:

Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Example 2:

Input: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]


https://leetcode.com/problems/minesweeper/

*/

// Option 1

var updateBoard = function(board, click) {
    let x = click[0];
    let y = click[1];
    
    // If we hit the mine, just changed to 'X' and return the result
    if(board[x][y] === 'M') {
        board[x][y] = 'X';
        return board;
    }
    
    dfs(x, y, board);
    return board;
};

function dfs(x, y, board) {
    // Check if is a valid movement
    if(isSafe(x, y, board)) {
        let num = getNumsOfBombs(x, y, board);
        
        if (num == 0) {
            board[x][y] = 'B';
            // Left, right, up, down and all diagonals
            let ROW = [-1, 0, 1, -1, 1, 0, 1, -1];
            let COL = [-1, 1, 1, 0, -1, -1, 0, 1];
            
            for (let i = 0; i < 8; i++) {
                let nextRow = x + ROW[i];
                let nextCol = y + COL[i];
                dfs(nextRow, nextCol, board);
            }
        } else {
            board[x][y] = num + '';
        }
    }
}

function isSafe(x, y, board) {
    return (
        (x >= 0 && x < board.length) &&
        (y >= 0 && y < board[0].length) &&
        (board[x][y] === 'E')
    );
}

function getNumsOfBombs(x, y, board) {
    let num = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let row = x + i;
            let col = y + j;
            if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) continue;
            if (board[row][col] == 'M' || board[row][col] == 'X') {
                num++;
            }
        }
    }
    return num;
}

// Option 2

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let x = click[0];
    let y = click[1];
    
    // If we hit the mine, just changed to 'X' and return the result
    if(board[x][y] === 'M') {
        board[x][y] = 'X';
        return board;
    }
    
    dfs(x, y, board);
    return board;
};

function dfs(x, y, board) {
    
    // Left, right, up, down and all diagonals
    let ROW = [-1, 0, 1, -1, 1, 0, 1, -1];
    let COL = [-1, 1, 1, 0, -1, -1, 0, 1];
    for(let i = 0; i < 8; i++) {
        let nextRow = ROW[i] + x;
        let nextCol = COL[i] + y;
        
        if(isSafe(nextRow, nextCol, board)) {
            let num = getNumsOfBombs(x, y, board);
            if(num === 0) {
                board[x][y] = 'B';
                dfs(nextRow, nextCol, board);
            } else {
                board[x][y] = num + '';
            }
        }
    }
}

function isSafe(x, y, board) {
    return (
        (x >= 0 && x < board.length) &&
        (y >= 0 && y < board[0].length) &&
        (board[x][y] === 'E')
    );
}

function getNumsOfBombs(x, y, board) {
    let num = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let row = x + i;
            let col = y + j;
            if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) continue;
            if (board[row][col] == 'M' || board[row][col] == 'X') {
                num++;
            }
        }
    }
    return num;
}