import { useForm } from 'react-hook-form';

const Hookform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert("Registration Successful !! " + JSON.stringify(data, null, 2));
    };

    return (
        <div style={{ maxWidth: '550px' }}>
            <h2> Registration Form !!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name :</label>
                <input type='text' {...register("name", { required: "Name is required" })} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

                <label>Email :</label>
                <input type='text' {...register("email", { required: "Email is required" })} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                <label>Password :</label>
                <input
                    type='password'
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                    })}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                <label>Confirm Password :</label>
                <input type='password' {...register("confirm password", {
                    required:"Comfirm password is required",
                    minlength:{value:6 , message:"Password must be at least "}
                })}
                />
                {errors.confirmpassword && <p style={{ color:'red'}}> {errors.confirmpassword.message}</p>}
            


                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Hookform;