import { useState } from 'react';

function FourthForm() {
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const [Errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...FormData,
            [event.target.name]: event.target.value
        });
    };

    const validate = () => {
        let errorlist = {};

        if (!FormData.name.trim()) {
            errorlist.name = 'Name is required';
        }

        if (!FormData.email.trim()) {
            errorlist.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FormData.email)) {
            errorlist.email = 'Email is invalid';
        }

        if (!FormData.password.trim()) {
            errorlist.password = 'Password is required';
        } else if (FormData.password.length < 6) {
            errorlist.password = 'Password must be at least 6 characters';
        }

        if (!FormData.confirmpassword.trim()) {
            errorlist.confirmpassword = 'Confirm Password is required';
        } else if (FormData.password !== FormData.confirmpassword) {
            errorlist.confirmpassword = 'Passwords do not match';
        }

        return errorlist;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert(`Name: ${FormData.name}, Email: ${FormData.email}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={FormData.name}
                    onChange={handleChange}
                />
                {Errors.name && <p style={{ color: 'red' }}>{Errors.name}</p>}

                <input
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={FormData.email}
                    onChange={handleChange}
                />
                {Errors.email && <p style={{ color: 'red' }}>{Errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={FormData.password}
                    onChange={handleChange}
                />
                {Errors.password && <p style={{ color: 'red' }}>{Errors.password}</p>}

                <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm your password"
                    value={FormData.confirmpassword}
                    onChange={handleChange}
                />
                {Errors.confirmpassword && <p style={{ color: 'red' }}>{Errors.confirmpassword}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FourthForm;
