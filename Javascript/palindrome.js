
//APPROACH  1
//OPTIMAL - two pointer approach
function palindrome()
{
    let arr= [1,2,2,1];
    let st=0;
    let ed=arr.length-1;
    for(let i=0;i<arr.length;i++){
        if(arr[st]!=arr[ed])
        {
            return false;
        }   
        st++;
        ed--; 
}
    return true;
}
console.log(palindrome());
//complexity:
//space complexity: O(1)
//time complexity: O(n)

//APPROACH 2 : reverse
let n=121;
let rem=0;
let rev=0;
while(temp>0)
{
    rem= rem%10;
    rev=(rev*10)+rem;
    n=n/10;
 
}
if(n==rev)
{
    return true
}
return false;