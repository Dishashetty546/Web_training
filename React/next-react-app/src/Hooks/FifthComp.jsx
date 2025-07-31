import { useState, useMemo } from "react";
function FifthComp(){
    const [count, setcount]= useState(0);
    const[number, setnumber] = useState(10);
  const result=  useMemo(() =>expfunc(number),[number]);
    function expfunc(num){
        console.log("Expensive function !!");
        
            for(let i=1;i<100;i++)
            {
                return num*num;
            }
          
    }
    return(
        <div>
            <h1>Fifth Component</h1>
            <h2>Result:{result}</h2> <br />
            <h2>Count: ${count}</h2>
            <button onClick={()=>setcount(count+1)}>Update Count</button>
            <h2>Number: ${number}</h2>
            <button onClick={()=> setnumber(number+5)}>Update Number</button>
        </div>
    )
}
export default FifthComp;