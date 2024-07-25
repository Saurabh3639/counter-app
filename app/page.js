"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* <h1>Counter App</h1> */}
      <div className="py-14 flex items-center">
        <button
          onClick={decrement}
          disabled={count <= 0}
          className="cursor-pointer px-4 py-2 rounded-md bg-white text-black"
        >
          -
        </button>
        <span className="px-14 py-4 text-3xl">{count}</span>
        <button
          onClick={increment}
          className="cursor-pointer px-4 py-2 rounded-md bg-white text-black"
        >
          +
        </button>
      </div>
      <button
        onClick={reset}
        className="cursor-pointer p-2 rounded-md bg-white text-black"
      >
        Reset
      </button>
    </main>
  );
}
