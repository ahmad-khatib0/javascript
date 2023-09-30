import React from "react";

export function Count({ count, increment, decrement }) {
  return (
    <div className="counter">
      <div className="btns">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>Current count: {count}</p>
    </div>
  );
}
