import {useState} from 'react';
function Counter(){
    const [count,setcount]= useState(0);
    // function update(){
    //     setcount(count+2);
    //     console.log("+++++++++++++++++++++++++++++++")
    // }
    return (
        <div>
<h1>Counter:{count}</h1>
            <button onClick={()=>{
                setcount(count+1)
            }}>Increment</button>
        </div>
    )
}
export default Counter;