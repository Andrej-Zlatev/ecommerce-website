"use client";
import { useState } from "react";

const Button4 = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex ">
      <button
        onClick={() => setCount((count) => count - 1)}
        className="bg-lightGray p-3 text-[#979797] hover:text-primary"
      >
        -
      </button>
      <p className="bg-lightGray p-3">{count}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="bg-lightGray p-3 text-[#979797] hover:text-primary"
      >
        +
      </button>
    </div>
  );
};

export default Button4;
