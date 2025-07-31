import React, { useEffect, useState } from 'react'

const Sessionstorage = () => {
    const [name, setname] = useState("");

    useEffect(() => {
        const storageName = sessionStorage.getItem("username");
        if (storageName) {
            setname(storageName);
        }
    }, []);

    const handleChange = (e) => {
        setname(e.target.value);
        sessionStorage.setItem("username", e.target.value);
    }

    return (
        <div>
            <h1>Local storage</h1>
            <div>
                Name: {name || "username"}
                <input
                    type="text"
                    value={name}
                    placeholder='Enter your name'
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Sessionstorage;