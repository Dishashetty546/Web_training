import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAxios = () => {
    const [users, setusers] = useState([]);
    const [Loading, setLoading] = useState(true); // should be true initially
    const [Error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setusers(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);   
            });
    }, []);

    if (Loading) {
        return <p>Loading User details....</p>;
    }

    if (Error) {
        return <p>Error: {Error}</p>; 
    }

    return (
        <div>
            <h2>User List with axios</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserAxios;
