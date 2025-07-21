import { useState } from "react";

function Store() {
    const [data, setData] = useState(10);

    function updateData() {
        setData(30);
        alert("data updated to 30");  
    }

    console.log("=============================================");

    return (
        <div>
            <h1>Hello, Myself Disha</h1>
            <h3>Name: {data}</h3>
            <button onClick={updateData}>Update the data</button>
        </div>
    );
}

export default Store;
