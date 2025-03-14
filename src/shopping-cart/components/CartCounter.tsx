'use client'
import { useState } from "react";

export const CartCounter = () => {

    const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center w-full justify-center h-full">
      <span className="text-6xl">{count}</span>
      <div className="flex mt-4">
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </div>
  );
}
