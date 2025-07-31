//importing useFormik and yup
import { useFormik } from 'formik';
import * as Yup from 'yup';

//create a function names FirstForm
const FirstForm = () => {
//yup is used to create a validation Schema, which takes Object
    const validationSchema = Yup.object({
        name: Yup.string()
        //name should be more then 3, hence min=3
            .min(3, "Name must be at least 3 characters")
            //required feild. if not entered throws error
            .required("Name is required !"),

        email: Yup.string()
            .email("Invalid email format !")
            .required("Email is required !"),
        password: Yup.string()
        //password minimum should be 7, or more
            .min(7, "Password must have minimum 7 characters")
            .required("Password is required !"),
            //adding a confirm password schema
        confirmPassword: Yup.string()
        //Yup.ref('password'): refers to the value of the password field.
//null: is included to allow proper comparison when the password might be empty initially (optional here but often added for safety).
//.oneOf(...): checks whether the value of confirmPassword matches the value of password.
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Please confirm your password"),
            //gender
        gender: Yup.string().required("Please select your gender"),
        //city: min 1 should be selected
        cities: Yup.array().min(1, "Please select at least one city"),
        //it returns true or false
        terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions")
    });
// formit takes - name, email, password,...etc 
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            //More then one city, stored in an array
            cities: [],
            terms: false
        },
        //it validated using Yup - schema that we set
        validationSchema: validationSchema,
        //on submit
        onSubmit: (values) => {
            alert("Registration Successful" + JSON.stringify(values, null, 2));
        }
    });
//
    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
            <h1>Register Now</h1>
            {/**Handle submit is built in  */}
            <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    {/* Name */}
                    <label>Name: </label>
                    <input
                        type='text'
                        name='name'
                        value={formik.values.name}
                        placeholder='Enter Name'
                        onChange={formik.handleChange}
              
                    />
                    {/* It throws error, touched is used, to know that form is visited or interacted, Errors is an object which stores all the error messags from the form */}
                    {formik.touched.name && formik.errors.name && (
                        <div style={{ color: 'red' }}>{formik.errors.name}</div>
                    )}

                    {/* Email */}
                    <label>Email: </label>
                    <input
                        type='text'
                        name='email'
                        value={formik.values.email}
                        placeholder='Enter Email'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div style={{ color: 'red' }}>{formik.errors.email}</div>
                    )}

                    {/* Password */}
                    <label>Password: </label>
                    <input
                        type='text'
                        name='password'
                        value={formik.values.password}
                        placeholder='Enter Password'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div style={{ color: 'red' }}>{formik.errors.password}</div>
                    )}

                    {/* Confirm Password */}
                    <label>Confirm Password: </label>
                    <input
                        type='text'
                        name='confirmPassword'
                        value={formik.values.confirmPassword}
                        placeholder='Confirm Password'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                    )}

                    {/* Gender */}
                    <div>
                        <label>Gender: </label><br />
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                value='Male'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.gender === 'Male'}
                            /> Male
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                value='Female'
                                onChange={formik.handleChange}

                                checked={formik.values.gender === 'Female'}
                            /> Female
                        </label>
                   
                        {formik.touched.gender && formik.errors.gender && (
                            <div style={{ color: 'red' }}>{formik.errors.gender}</div>
                        )}
                    </div>

                    {/* City */}
                    <div>
                        <label>Select City: </label><br />
                        {['Delhi', 'Mumbai', 'Bangalore'].map((city) => (
                            <label key={city}>
                                <input
                                    type='checkbox'
                                    name='cities'
                                    value={city}
                                    onChange={formik.handleChange}
                                    checked={formik.values.cities.includes(city)}
                                /> {city}
                            </label>
                        ))}
                        {formik.touched.cities && formik.errors.cities && (
                            <div style={{ color: 'red' }}>{formik.errors.cities}</div>
                        )}
                    </div>

                    {/* Terms & Conditions */}
                    <div>
                        <label>
                            <input
                                type='checkbox'
                                name='terms'
                                onChange={formik.handleChange}
                                checked={formik.values.terms}
                            />
                            I accept the Terms & Conditions
                        </label>
                        {formik.touched.terms && formik.errors.terms && (
                            <div style={{ color: 'red' }}>{formik.errors.terms}</div>
                        )}
                    </div>

                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FirstForm;
