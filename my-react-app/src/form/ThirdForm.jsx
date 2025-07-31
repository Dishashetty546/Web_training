import {useState} from 'react'
function ThirdForm(){
    const [FormData, setFormData] = useState({
        name:'',
        email:''
    });
    const [Errors, setErrors] = useState({}); 
    const handleChange=(event)=>{
        setFormData({
            ...FormData,
            [event.target.name]:event.target.value
        });
    }
    const validate=()=>{
        let errorlist = {};
        if(!FormData.name.trim())
        {
            errorlist.name='Name is required';
        }

        if(!FormData.email.trim()) 
        {
            errorlist.email='Email is required';
        }
        else if( ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FormData.email)) 
        {
            errorlist.email='Email is invalid';
        }
        return errorlist;
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const validaterror = validate();
        setErrors(validaterror);
        if(Object.keys(validaterror).length === 0)
        {
            alert(`Name: ${FormData.name}, Email: ${FormData.email}`);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Enter name ' value={FormData.name} onChange={handleChange}/>
                {Errors.name && <p style={{color:'red' }}>{Errors.name}</p>}
                <input type="text" name="email" placeholder='Enter email ' value={FormData.email} onChange={handleChange}/>
                {Errors.email && <p style={{color:'red' }}>{Errors.email}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ThirdForm;
