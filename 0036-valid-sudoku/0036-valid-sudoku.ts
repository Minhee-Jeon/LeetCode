function isValidSudoku(board: string[][]): boolean {
     const row = new Array(9).fill(null).map(() => new Set([])), 
    	col = new Array(9).fill(null).map(() => new Set([])), 
        box = new Array(9).fill(null).map(() => new Set([]));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (row[i].has(board[i][j])) return false;
                if (col[j].has(board[i][j])) return false;
                if (box[getBoxNum(i, j)].has(board[i][j])) return false;

                row[i].add(board[i][j]);
                col[j].add(board[i][j]);
                box[getBoxNum(i, j)].add(board[i][j]);
            }
        }
    }

    return true;
};

function getBoxNum(i, j) {
    return 3 * Math.floor(i/3) + Math.floor(j/3);
}