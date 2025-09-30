"use client";
import { useEffect } from "react";
import { animate } from "motion"; // ✅ ใช้ motion แทน framer-motion

export default function MotionDemo() {
  // ← เปลี่ยนชื่อ Component
  useEffect(() => {
    // ตัวอย่าง 1: duration
    animate("#box1", { x: 200 }, { duration: 2 });

    // ตัวอย่าง 2: delay
    animate("#box2", { y: 100 }, { duration: 1, delay: 1 });

    // ตัวอย่าง 3: repeat loop
    animate("#box3", { rotate: 360 }, { duration: 2, repeat: Infinity });

    // ตัวอย่าง 4: ease
    animate(
      "#box4",
      { y: [0, 100, 0, 100] },
      { duration: 2, ease: "easeInOut" }
    );
  }, []);

  return (
    <main className="flex flex-col gap-6 items-center justify-center h-screen bg-base-200">
      <div
        id="box1"
        className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white"
      >
        1
      </div>
      <div
        id="box2"
        className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-white"
      >
        2
      </div>
      <div
        id="box3"
        className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-white"
      >
        3
      </div>
      <div
        id="box4"
        className="w-16 h-16 bg-success rounded-lg flex items-center justify-center text-white"
      >
        4
      </div>
    </main>
  );
}
