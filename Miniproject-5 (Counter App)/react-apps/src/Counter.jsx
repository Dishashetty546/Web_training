import { useState } from "react";
function Counter(){
    const [increasecounter, setincreasecounter] = useState(0);
    const [decreasecounter, setdecreasecounter] = useState(0);
    const [reset, setreset] = useState(0);
    return (
        <div>
            <div>
            <h1>WELCOME PEOPLE !</h1>
            <h1>Increment, Decrement and reset the Counter here !!:</h1>
            <h1>Counter: {increasecounter}</h1>
            <button onClick={()=>{
                setincreasecounter(increasecounter+1)
            }}>
                Increment Button
            </button>
            </div>
            <div>
            <h1>Counter: {decreasecounter}</h1>
            <button onClick={()=>{
                setdecreasecounter(decreasecounter-1)
            }}>
                Decrement Button
            </button>
            </div>
            <div>
            <h1>Counter: {reset}</h1>
            <button onClick={()=>{
                setincreasecounter(0);
                setdecreasecounter(0);
                setreset(0);
            }}>
                Reset Button
            </button>
            </div>
        </div>
    )
}
export default Counter;
