import {useState} from 'react';
function State(){
    const [count, setCount] = useState('A');
    const handleClick=()=>{
        setCount(count+1);
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default State; 