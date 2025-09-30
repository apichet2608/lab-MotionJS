"use client";
import { useEffect, useState } from "react";
import { animate } from "motion";

export default function DynamicNumber() {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(display, value, {
      duration: 1,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen bg-base-200">
      <div className="text-6xl font-bold text-success">{display}</div>
      <div className="flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => setValue(value + 50)}
        >
          เพิ่ม +50
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setValue(value - 30)}
        >
          ลด -30
        </button>
      </div>
    </main>
  );
}
