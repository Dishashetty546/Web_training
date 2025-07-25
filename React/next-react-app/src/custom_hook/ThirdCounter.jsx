import useCounter from "./useCounter";
function ThirdCounter(){
    const {count, increment, decrement, reset} = useCounter(10);
    return(
        <div>

<h1>Third Counter : </h1>
                  <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
       
        

    )
}
   export default ThirdCounter; 
