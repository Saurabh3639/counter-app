"use client";

import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";

export default function Home() {
  // const [count, setCount] = useState(0);
  // const [maxCount, setMaxCount] = useState(0);

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? Number(savedCount) : 0;
  });
  const [maxCount, setMaxCount] = useState(() => {
    const savedMaxCount = localStorage.getItem("maxCount");
    return savedMaxCount ? Number(savedMaxCount) : 0;
  });

  const increment = () => {
    if (maxCount == 0) {
      setCount((prevCount) => prevCount + 1);
    } else if (count < maxCount) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  const reset = () => setCount(0);
  const resetMaxCount = () => setMaxCount(0);

  // Calculate the width of the progress bar in percentage
  const progressBarWidth = maxCount > 0 ? (count / maxCount) * 100 : 0;

  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.setItem("maxCount", maxCount);
  }, [count, maxCount]);

  return (
    <>
      {/* progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-orange-500 h-4 rounded-full"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>

      {/* Input box */}
      <div className="absolute w-full flex justify-center">
        <input
          type="text"
          className="border px-4 py-2 rounded-md outline-none borderColor font-medium text-lg"
        />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center">
        {/* max count input */}
        <div className="py-4 w-full flex flex-col items-center">
          <label htmlFor="maxCount" className="mr-2 font-bold textColor">
            Max Count
          </label>
          <div className="relative flex items-center">
            <input
              type="number"
              id="maxCount"
              value={maxCount}
              onChange={(e) => setMaxCount(e.target.value)}
              className="border px-4 py-2 rounded-md outline-none borderColor"
            />
            <div className="textColor px-2" onClick={resetMaxCount}>
              <GrPowerReset />
            </div>
          </div>
        </div>

        {/* increment / decrement button and count */}
        <div className="py-14 w-full flex items-center justify-center">
          <button
            onClick={decrement}
            disabled={count <= 0}
            className="cursor-pointer px-4 py-2 rounded-full border borderColor textColor"
          >
            -
          </button>
          <span className="px-14 py-4 text-3xl textColor">{count}</span>
          <button
            onClick={increment}
            className="cursor-pointer px-4 py-2 rounded-full border borderColor textColor"
          >
            +
          </button>
        </div>

        {/* reset button */}
        <div className="py-2 w-full flex items-center justify-center">
          <button
            onClick={reset}
            className="cursor-pointer p-2 rounded-md border borderColor textColor"
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
