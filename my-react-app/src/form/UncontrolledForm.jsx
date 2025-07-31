import { useRef } from "react";
function UncontrolledForm(){
    const nameRef = useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`welcome : ${nameRef.current.value}`);
    };
    return(
        <div>
            <h1>Welcome to form </h1>
            <form type='text'>
                <input type="text" ref={nameRef} placeholder="Enter Name" /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UncontrolledForm;