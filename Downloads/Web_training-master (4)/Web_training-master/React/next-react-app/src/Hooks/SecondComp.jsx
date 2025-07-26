import { useEffect, useState } from "react";
function SecondComm(){
    useEffect(()=>{
        console.log("Helllooooooooo! UseEffect called......................")
    },[])
    return(
        <div>
            <h1>Second compoenent with useeffect</h1>
        </div>
    )
}
export default SecondComm;