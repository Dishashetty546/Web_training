import {useState} from 'react';
function FourthForm(){
    const [FormData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
        confirmpassword:''
    });
    const [Errors, setErrors] = useState({});
    const handleChange=(event)=>{
        setFormData({
            ...FormData,
            [event.target.name]:event.target.value
        });
    }
    const validate=()=>{
        let errorlist={};
        if(!FormData.name.trim())
        {
            errorlist.name='Name is required';
        }
        if(!FormData.email.trim())
        {
            errorlist.email='email is required';
        }
        else if( ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FormData.email))
        {
            errorlist.email='email is invalid';
        }
        return errorlist;
    }
    const passwordMatch=()=>{
        let errorlist={}
        pass1= FormData.password;
        pass2= FormData.confirmpassword;
        if(pass1=='')
        {
            errorlist.pass1('password is required')
        }
        if(pass2=='')
        {
            errorlist.pass2('Passwo')
        }
    }
    const handleSubmit=(Event)=>{
        Event.preventDefault();
        const validaterror= validate();
        setErrors(validaterror)
        if(Object.keys(validaterror.length===0))
        {
            alert(`Name: ${FormData.name}, email: ${FormData.email}`)
        }
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Enter name' value={FormData.name} onChange={handleChange}/>
                {Errors.name &&  <p style={{color:'red'}}>{Errors.name}</p>}

                <input type="text" name="email" placeholder='Enter email' value={FormData.email} onChange={handleChange}/>
                {Errors.email && <p style={{color:'red'}}>{Errors.email}</p>}
                <input type='text' name="password" placeholder='Enter your password' value={FormData.password} onChange={handleChange}/>
                {Errors.password && <p style={{color:'red'}}>{Errors.password}</p>}
                <input type='text' name="Confirmpassword" placeholder='Enter your password to confirm' value={FormData.confirmpassword} onChange={handleChange}/>
                {Errors.confirmpassword && <p style={{color:'red'}}>{Errors.confirmpassword}</p>}
                <button type="submit">Submit</button>




            </form>
        </div>
    )
}
export default FourthForm;