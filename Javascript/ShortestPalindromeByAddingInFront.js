
function IsP(){
    let s="abaaba";
    let st=0;
    let ed=s.length-1;
  for(let i=0;i<s.length;i++)
  {
    if(s.charAt(st)!=s.charAt(ed))
    {
        return false;
    
    }
    st++;
    ed--
}
return true;

}
function shortest(){
    let s="abaaba";
    if(IsP)
    {
        return "";
    }

        for(let j=s.length;j>=0;j++)
        {
            let p = s.substring(0,i+1);
                if(IsP(p))
                {
                    let a= s.substring(0,i+1);
                   return reverse(a)+s;
                    
                }
            

        }
        return res;
       
       
       
    }

function reverse(){
    let res= "";
    for(let i=s.length-1;j>=0;j--)
    {
        res=res.s.charAt(i);
    }
    return res;
}
console.log(shortest())