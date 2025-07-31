import { useState } from 'react';

function FirstForm() {
    const [FormData, setFormData] = useState({
        name: '',
        email: ''
    });
    const handlechange= (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit= (event) => {
        // event.preventDefault();
       
        alert(`Wlcome : ${FormData.name}, Email: ${FormData.email}`)
    };
    console.log("First component rendered")

    return (
        <div>
            <h1>Welcome to Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    onChange={handlechange}
                /> <br />
                <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handlechange}
                /> <br />
                <button type="submit">Submit</button> <br />
            </form>
        </div>
    );
}

export default FirstForm;
