import { useState, useEffect } from "react";
function FourthComm(){
    const[count, setCount]= useState(0);
    const[theme, setTheme] = useState('light');
    // function increment(){
    //     setCount(count+1);
    // }
    useEffect(()=>{
        console.log(" Count useEffect called........");
        console.log(`Count: ${count}`);
        // console.log(`Theme : ${theme}`);
    },[count])
     useEffect(()=>{
        console.log("Theme useEffect called........");
        // console.log(`Count: ${count}`);
        console.log(`Theme : ${theme}`);
    },[theme])
    return(
        <div>
            <h1>Fourth Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Theme : {theme}</h1>
            <button onClick={()=>setTheme(theme=='light'? "dark": "light")}>Change Theme</button>
        </div>
    )
}
export default FourthComm;