import {useState}  from 'react';

function Counter(){
    const[Count, setCount] = useState(0);
    return (
        <>
        <h1>HELLO COUNTER</h1>
        <p>clicked {Count} Times</p>
        <button onClick={()=>setCount(Count+1)}>Click Me</button>
        </>
    )
}
export default Counter;