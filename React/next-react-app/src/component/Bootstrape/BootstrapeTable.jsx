import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BootstrapeTable() {
    const student = [
        {
            id: 111, name: "Disha", city: "Udupi"
        },
        {
            id: 112, name: "Adhi", city: "Kundapura"
        }
    ];

    const handleClick = (id) => {
        alert(`Deleting its ${id}!`);
    };

    return (
        <div>
            <h2>Student Table</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.city}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleClick(c.id)}>Delete</Button>
                                 
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default BootstrapeTable;
