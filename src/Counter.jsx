import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  };

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
