import Employee_Card from './Employee_Card'
function EmployeeList(){
    const Employees=[
                {id:111, name:"Disha", city:"Udupi"},
        {id:112, name:" Shreya", city:"Udupi"},
        {id:113, name:"Adhi", city:"Udupi"},
        {id:114, name:"Akshay", city:"Udupi"},
        {id:115, name:"trupthi", city:"Udupi"},
        {id:116, name:"shetty", city:"Udupi"},

    ]
    return (
        <div>
            <h1>Employee List :</h1>
            {
                Employees.map(employee => <Employee_Card key={employee.id} name={employee.name} city={employee.city} />)

}

        </div>
    )
}
export default EmployeeList;