import { useState } from "react";

function Buttons(){
    // const [text,setText] = useState('')
    // const handleClick=(event)=>{
    //     setText(event.target.value);
    // }
    // const [name,setname]= useState('');
    // const handleSubmit=()=>{
    //     alert(
    //     `Form subitted by ${name}`
    //     )

    // }

    // const handleMouseEnter=()=>{
    //     console.log("Mouse Entered the box")

    // }
    // const handleMouseLeave=()=>{
    //     console.log("Mouse left the boc")
    // }
//    const great=(name)=>{
//     alert(`Wlcome Ms${name}`)
//    }
const handleKey=(event)=>{
   if(event.key=="Enter")
   {
    alert("Welcome !")
   }
}
        // <div>
        // <h2>First event</h2>
        // <button onClick={handleClick}>Click</button>
        // </div>
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
    //  <div>
    //     <form onSubmit={handleSubmit}>
    //         <h1>Enter name :</h1>
    //         <input type="text" value={name} placeholder="Enter here!" onChange={(event)=>setname(event.target.value)} />
    //         <br />
    //         <button type="submit">Submit</button>
    //     </form>
    //  </div>
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{/* <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
    width:"200px", height:"400px", backgroundColor:"lightblue",alignItems:"center", lineHeight:"200px"
}}></div> */}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
return(
    <div>
        {/* <button onClick={()=>
            (great('Ajay'))
        }></button> */}
        <h2>Keyboard Event</h2>
        <h2>Enter :</h2>
        <input type="text" onKeyDown={handleKey}/>
    </div>
    
    )}
export default Buttons;