import { useForm } from 'react-hook-form';

const Hookform = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert("Registration Successful !! " + JSON.stringify(data, null, 2));
    };

    const password = watch("password");

    return (
        <div style={{ maxWidth: '550px', margin: 'auto', padding: '20px' }}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <label>Name:</label>
                <input
                    type='text'
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters"
                        }
                    })}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

                {/* Email */}
                <label>Email:</label>
                <input
                    type='text'
                    {...register("email", {
                        required: "Email is required"
                    })}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                {/* Password */}
                <label>Password:</label>
                <input
                    type='password'
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 7,
                            message: "Password must be at least 7 characters"
                        }
                    })}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

                {/* Confirm Password */}
                <label>Confirm Password:</label>
                <input
                    type='password'
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                            value === password || "Passwords do not match"
                    })}
                />
                {errors.confirmPassword && (
                    <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
                )}

                {/* Gender */}
                <label>Gender:</label><br />
                <label>
                    <input
                        type='radio'
                        value='Male'
                        {...register("gender", { required: "Gender is required" })}
                    /> Male
                </label>
                <label>
                    <input
                        type='radio'
                        value='Female'
                        {...register("gender", { required: "Gender is required" })}
                    /> Female
                </label>
                <label>
                    <input
                        type='radio'
                        value='Other'
                        {...register("gender", { required: "Gender is required" })}
                    /> Other
                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}

                {/* City */}
                <label>Select Cities:</label><br />
                <label>
                    <input
                        type='checkbox'
                        value='Delhi'
                        {...register("cities", {
                            validate: (value) => value && value.length > 0 || "Select at least one city"
                        })}
                    /> Delhi
                </label>
                <label>
                    <input
                        type='checkbox'
                        value='Mumbai'
                        {...register("cities", {
                            validate: (value) => value && value.length > 0 || "Select at least one city"
                        })}
                    /> Mumbai
                </label>
                <label>
                    <input
                        type='checkbox'
                        value='Bangalore'
                        {...register("cities", {
                            validate: (value) => value && value.length > 0 || "Select at least one city"
                        })}
                    /> Bangalore
                </label>
                {errors.cities && <p style={{ color: 'red' }}>{errors.cities.message}</p>}

                {/* Terms */}
                <label>
                    <input
                        type='checkbox'
                        {...register("terms", {
                            required: "You must accept the terms and conditions"
                        })}
                    />
                    I accept the Terms and Conditions
                </label>
                {errors.terms && <p style={{ color: 'red' }}>{errors.terms.message}</p>}

                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Hookform;
