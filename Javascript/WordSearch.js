
const board= [
    ['A','B','C', 'D'],
    ['S','F','C','S'],
    ['A','S','E','E']
];
const string= "ABCCEf";
//take the input board and string
//create a function which takes board and string as parameter
//Consider r = board.length = 3
//consider c= board[0].length = 4 - [A,B,C,D]
//create a const dfs - depth first search
//which takes, i,j,k as parameter
// 
//pointer i & j is for board, whereas k is for string
//if board[i][j] !== string[k]
//it will return false
// take a new variable matrix temp [][] equal to size board[i][j]
//[0,0,0] => A
//matches , so mark visited
//depth first search
//K+1, B
//dfs(1, 0,1) = B
//B === string(k+1)
//mark as visited - S
//dfs(0,0,1), C===C
//mark as visited - S
//
function search(board,string)
{
    
   const r= board.length;
   const c= board[0].length;
   const dfs=(i,j,k)=>{

    if( i<0 || j<0 || i>=r || j>=c || board[i][j] !== string[k])
    {
        return false;

    }
    const temp= board[i][j];
    board[i][j]='S';
    const found= dfs(i+1, j,k+1)
     || dfs(i-1, j,k+1) ||
      dfs(i,j+1,k+1) || dfs(i,j-1,k+1)
      
       
    board[i][j]= temp;
    return found;
   }
   for(let i=0;i<r;i++)
   {
    for(let j=0;j<c;j++)
    {
        if(dfs(i,j,0))
        {
            return true;
        }
    }
    
   }
   return false;


   
}
console.log(search(board, string));