function printAllPath(board){
    let res = [];
    let s = '';
    dfs(board, res, s, 0, 0);
    return res;
}

function dfs(board, res, sb, x, y){
    let len = sb.length;
    sb += board[y][x];
    
    if( x == board[0].length - 1 && y == board.length - 1){
        let s = sb.toString();
        res.push(s);
    } else {
        if( x + 1 < board[0].length) dfs(board, res, sb, x+1, y);
        if( y + 1 < board.length ) dfs(board, res, sb, x, y+1); 
    }
    sb = sb.slice(0, len);
}


grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(printAllPath(grid));