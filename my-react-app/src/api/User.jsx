import { useEffect, useState } from "react";
//create component User
function User() {
    //create three states   , when we are trying to fetch - display loading
    const [users, setusers] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);

    useEffect(() => {
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
    }, []);

    if (Loading) {
        return <p>Loading User Details.... Please wait some time</p>;
    }

    if (Error) {
        return <p>Error: {Error}</p>;
    }

    return (
        <div>
            <h2>User List :</h2>
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

export default User;
