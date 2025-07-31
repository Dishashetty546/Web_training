import React, { useState } from "react";

function FirstComp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
    console.log(`Count: ${count}`);
  }

  return (
    <div>
      <h1>Functional Component With State</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default FirstComp;
