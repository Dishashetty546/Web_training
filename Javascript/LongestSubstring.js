function ls(){
    let set= new Set();
    let s= "abcweeeeeeabcdfe";
    let l=0;
    let ml=0;
    for(let r=0;r<s.length;r++)
    {
        if(set.has(s[r]))
        {
           set.delete(s[r]);
           l++;
            
        }
        set.add(s[r]);
        ml=Math.max(ml, r-l);


    }
    return ml;


}
console.log(ls());