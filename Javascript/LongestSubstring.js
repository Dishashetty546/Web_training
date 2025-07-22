function ls(){
    let set= new Set();
    let s= "pwef";
    let l=0;
    let ml=0;
    for(let r=1;r<s.length;r++)
    {
        while(set.has(s[r]))
        {
           set.delete(s[r]);
           l++;
            
        }
        set.add(s[r]);
        ml=Math.max(ml, r-l+1);


    }
    return ml;


}
console.log(ls());