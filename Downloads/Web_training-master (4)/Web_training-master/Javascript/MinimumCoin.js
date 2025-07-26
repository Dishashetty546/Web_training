// 1, 2, 5
//6
//6 = 5+1
//6= 2+2+2
//6 = 1+1+1+1+1+1
//6= 2+2+1+1

//out of all this, 2 is minimum
//o/p: 2

//steps
//1. taking an array to store the minimum coins required in each step
//2. m[1]= 1, m[2]= 1, m[3]= 2, m[4] = 2, m[5]= 1, m[6]=2, m[7]=3, m[8]= 3, m[9]=4, m[10]=2, m[11]= 3
//2. How to acheive this?
//3. for each amount , we will assign infinity
// infy | infy | infy | infy | infy ........... 11th index
//4. coin 1 -> 1+ m[0]=1
//coin 2 -> 1+ m[1]= 1+1 =2
//coin 3 -> 1+ m[i-coin]= 1+m[i-coin] = 1+ m[6-5] = 1+ m[1]= 1+1= 2
//coin 4 -> 1+ m[1- coin]= 1+ m[6-2] = 1+ m[4]= 1+2= 3
//coin 5 -> 1+ m[6-1] = 1+ m[6-4]= 1+ m[2]= 1+1 = 2

//coin 6= 1+ m[ 6- 5] = 1+ m[1]= 1+ 1= 2
let n = 3;
let coins = [1, 2, 5];
let a = 6;
function minimumCoin(coins, a) {
  if (a <= 0) {
    return 0;
  }
  if (coins.length === 0) {
    return -1;
  }

  let m = new Array(a + 1);
  m[0] = 0;
  for (let i = 1; i <= a; i++) {
    m[i] = Infinity;

    for (let coin of coins) {
      if (coin <= i) {
        m[i] = Math.min(m[i], 1 + m[i - coin]);
      }
    }
  }
  return m[a];
}

console.log(minimumCoin(coins, a));
