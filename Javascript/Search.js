function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  const dfs = (i, j, k) => {
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word[k]) return false;
    
    const temp = board[i][j];
    board[i][j] = '#'; // mark as visited
    
    const found = dfs(i + 1, j, k + 1) ||
                  dfs(i - 1, j, k + 1) ||
                  dfs(i, j + 1, k + 1) ||
                  dfs(i, j - 1, k + 1);
    
    board[i][j] = temp; // unmark
    return found;
  };
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  
  return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = "ABCCED";
console.log(exist(board, word));