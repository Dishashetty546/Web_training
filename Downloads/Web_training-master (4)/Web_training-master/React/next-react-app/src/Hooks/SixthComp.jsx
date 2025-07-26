import { useState } from "react";
import { useRef } from "react";
function SixthComm(){
    const inputRef=useRef();
    function Focus(){
        // let input_obj=document.getElementById("input");
        // input_obj.Focus();

        inputRef.current.focus();
        inputRef.current.value="React Sessions";
        inputRef.current.style.color="green";
    }
    return(
        <div>
            <h1>Sixth Compinent</h1>
            <input type="text" ref={inputRef} /> <br /> <br />
            <button onClick={Focus}>Focus Input</button>
        </div>
    )

}
export default SixthComm;