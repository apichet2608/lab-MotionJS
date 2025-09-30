"use client";
import { useEffect, useState } from "react";
import { animate } from "motion";

export default function NumberCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 5,
      ease: "easeInOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop(); // cleanup
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-base-200">
      <div className="text-6xl font-bold text-primary">{count}</div>
    </main>
  );
}
