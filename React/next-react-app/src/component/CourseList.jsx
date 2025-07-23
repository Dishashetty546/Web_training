import { useState } from "react";
function  CourseList(){
    const [ Course, setCourse]= useState([
        {id:111, name: "Java"},
        {id:112, name:"react"},
        {id:113, name: "javascript"}
    ])
    const handleDeleteButton=(id)=>{
        const newCourse= Course.filter((c)=> c.id !==id);
        setCourse(newCourse);
    }
    return(
    <div>
        <h1>Course List :</h1>
         {
            Course.map((c)=>{
                return(
            <div key={c.id} > {c.name} <button onClick={()=>handleDeleteButton(c.id)}>Delete</button></div>)
            })
         }
    </div>
    )
}
export default CourseList;