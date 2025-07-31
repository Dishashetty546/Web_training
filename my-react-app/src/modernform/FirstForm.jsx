import { useFormik } from 'formik';
import * as Yup from 'yup';

const FirstForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required !"),
        email: Yup.string().email("Invalid email format !").required("Email is required !"),
        password: Yup.string().min(6, "Password must have minimum 6 character").required("Password is required !")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful" + JSON.stringify(values, null, 2));
        }
    });

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
            <h1>Register Now</h1>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Name: </label>
                    <input 
                        type='text' 
                        name='name' 
                        value={formik.values.name} 
                        placeholder='Enter Name' 
                        onChange={formik.handleChange} 
                        
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div style={{ color: 'red' }}>
                            {formik.errors.name}
                        </div>
                    )}
                    
                    {/* email input */}
                    <label>Email: </label>
                    <input 
                        type='text' 
                        name='email' 
                        value={formik.values.email} 
                        placeholder='Enter Email' 
                        onChange={formik.handleChange} 
                     
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div style={{ color: 'red' }}>
                            {formik.errors.email}
                        </div>
                    )}

                    {/* password field */}
                    <label>Password: </label>
                    <input 
                        type='text' 
                        name='password' 
                        value={formik.values.password} 
                        placeholder='Enter Password' 
                        onChange={formik.handleChange} 
                      
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div style={{ color: 'red' }}>
                            {formik.errors.password}
                        </div>
                    )}
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FirstForm;
