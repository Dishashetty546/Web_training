import { useRef } from "react";
import Child from './child.jsx';
// import { useRef } from "react";
function parent(){
      let inputRef= useRef();
    function handleButton(){
        inputRef.current.style.color="red";
      
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <Child/>
            <button onClick={handleButton}>Update</button>
        
        </div>
    )
}
export default parent;