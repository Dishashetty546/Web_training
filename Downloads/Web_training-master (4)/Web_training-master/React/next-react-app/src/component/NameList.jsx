function NameList(){
    const names=[
        {
           id:123, name: Disha
        },
        {
           id:111, name:Shreya
        },
        {
           id:456, name:Adithya
        }
    ]
    return(
        <div>
            <h1>List of Names :</h1>
            <table>
            <thead>
                    <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    names.map((c)=>{
                        return(
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
           
        </div>
    )
}
export default NameList;