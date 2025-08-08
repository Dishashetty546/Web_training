import { useState } from "react";
function Calender() {
    const [num1, setnum1] = useState('');
    const [num2, setnum2] = useState('');
    const [result, setResult] = useState(null);

    const add = () => setResult(Number(num1) + Number(num2));
    return (
        <div>
            <h1>SIMPLE CALCULATOR</h1>
            <input type='number' placeholder="first number" value={num1} onChange={(e) => setnum1(e.target.value)} data-testId='num1' />
            <input type='number' placeholder="Second number" value={num2} onChange={(e) => setnum2(e.target.value)} data-testId='num2' />
            <button onClick={add}>Add</button>
            {result !== null && (
                <h3>{result}</h3>
            )}
        </div>
    )
}
export default Calender;
