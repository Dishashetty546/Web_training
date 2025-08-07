import { useState } from "react"

function RemovingAnItemFromList(){
    const [names, setnames]=useState([
        {id:111, name:"Disha"},
        {id:112, name:"Shetty"},
        {id:113, name:"Trupthi"}
    ])
    const handleDeleteButton=(id)=>{
        const newName= names.filter((c)=>c.id!==id);
        setnames(newName);
    }
    return (
        <div>
            <h1>Name List :</h1>
            <ul>
                {
                    names.map((c)=>{
                        return(
                            <div key={c.id}>
                            <li > Id : {c.id}</li>
                            <li> Name :{c.name}</li>
                            <button onClick={()=>handleDeleteButton(c.id)}>Delete</button>
                            </div>
                          
                        )
                    })
                }
                
            </ul>

        </div>
    )
}
export default RemovingAnItemFromList;