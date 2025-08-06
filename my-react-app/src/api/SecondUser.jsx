import { useState } from 'react';

function SecondUser() {
    // create three states
    const [users, setusers] = useState([]);
    const [Loading, setLoading] = useState(false); 
    const [Error, setError] = useState(null);

    const FetchData = () => {
        setLoading(true); 
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong.....");
                }
                return response.json();
            })
            .then((data) => {
                setusers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    return (
        <div>
            <h2>User List :</h2>
            <button onClick={FetchData}>Fetch User List</button>

            {Loading && <p>Loading User Details.... Please wait some time</p>}
            {Error && <p>Error: {Error}</p>}

            <ul>
                {users.map((users) => {
                    return (
                        <li key={users.id}>
                            <strong>{users.title}</strong>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SecondUser;
