//step 1:  check is palindrom  usimg this function function palindrome()
let arr=[1,2,3,4]
function IsPalindrome(arr){
    // let arr= [1,2,2,1];
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
}
function Palindrome()
{
    if(!IsPalindrome)
    {
        console.log("Is a Palindrome");
    }
    else{
        console.log("Is not a Palindrome")
    }
}
console.log(Palindrome());
//Complexity analysis
//space: O(n)
//time: O(n)