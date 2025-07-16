function IsPrime(){
    let num=4;
    if(num<=1){
        return false;
    }
    else{
        for(let i=2;i<num;i++)
        {
            if(num%i===0)
            {
                console.log("Not a prime number");
            }
        }
    }
    
}
function prime()
{
    if(!IsPrime)
    {
        console.log("Is a prime number");
    }
    else{
        console.log("Not a prime number")
    }
}
console.log(prime())

//approach
// n<=1
//return false, negatives can't be prime
//
//i=2
//2<7
//2%7===0  //return false
//