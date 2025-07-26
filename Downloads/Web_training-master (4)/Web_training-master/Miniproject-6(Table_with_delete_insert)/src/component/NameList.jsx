function NameList(){
    const names=[
        {id:111, name:"Disha"},
        {id:112, name:"Shetty"},
        {id:113, name:"Trupthi"}
    ]
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
                            </div>
                          
                        )
                    })
                }
                
            </ul>

        </div>
    )
}
export default NameList;