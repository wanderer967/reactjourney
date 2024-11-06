import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function increaseIncrementItself() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrementItself() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count Value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing a value by: {incrementBy}</h1>
      <button onClick={increaseIncrementItself}>Increase Increment</button>
      <button onClick={decreaseIncrementItself}>Decrease Increment</button>
    </div>
  );
}
