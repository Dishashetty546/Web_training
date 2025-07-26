function TableList(){
    const student=[
        {id:111, name:"Disha", city:"Udupi"},
        {id:112, name:" Shreya", city:"Udupi"},
        {id:113, name:"Adhi", city:"Udupi"},
        {id:114, name:"Akshay", city:"Udupi"},
        {id:115, name:"trupthi", city:"Udupi"},
        {id:116, name:"shetty", city:"Udupi"},

    ]
    return(
        <div>
            <h1>Student Table : </h1>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((c)=>{
                            return(
                            <tr key={c.id}> 
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.city}</td>

                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default TableList;