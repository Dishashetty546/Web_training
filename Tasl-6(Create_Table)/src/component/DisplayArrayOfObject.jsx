function DisplayArrayOfObject(){
    const names=[
        {id:111, name:"Disha", age:20},
        {id:112, name:"Shetty", age:21},
        {id:113, name:"Trupthi", age:20}
    ]
    return (
         <div>
            <h1>Student Table : </h1>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((c)=>{
                            return(
                            <tr key={c.id}> 
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.age}</td>

                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default DisplayArrayOfObject;