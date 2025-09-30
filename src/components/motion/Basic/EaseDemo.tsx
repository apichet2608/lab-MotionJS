"use client";
import { useEffect } from "react";
import { animate } from "framer-motion";

export default function EaseDemo() {
  useEffect(() => {
    animate("#box1", { x: 200 }, { duration: 2, ease: "linear" });
    animate("#box2", { x: 200 }, { duration: 2, ease: "easeIn" });
    animate("#box3", { x: 200 }, { duration: 2, ease: "easeOut" });
    animate("#box4", { x: 200 }, { duration: 2, ease: "anticipate" });
  }, []);

  return (
    <main className="flex flex-col gap-6 items-start justify-center h-screen p-10 bg-base-200">
      <div
        id="box1"
        className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white"
      >
        linear
      </div>
      <div
        id="box2"
        className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-white"
      >
        easeIn
      </div>
      <div
        id="box3"
        className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-white"
      >
        easeOut
      </div>
      <div
        id="box4"
        className="w-16 h-16 bg-success rounded-lg flex items-center justify-center text-white"
      >
        anticipate
      </div>
    </main>
  );
}
