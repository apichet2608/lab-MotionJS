"use client";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function SliderWithBubble() {
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const min = 0;
  const max = 100;

  // คำนวณตำแหน่ง bubble (% ของ slider)
  const percent = (value - min) / (max - min);
  const bubbleX = percent * 100;

  return (
    <main className="flex items-center justify-center h-screen bg-base-100 gap-8">
      <div className="relative w-80">
        {/* Bubble */}
        <motion.div
          animate={{ left: `${bubbleX}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute -top-10 -translate-x-1/2 bg-fuchsia-600 text-white text-sm font-bold px-3 py-1 rounded-lg"
        >
          {value}
        </motion.div>

        {/* Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="range range-primary w-full"
        />
      </div>

      <div className="relative w-80">
        {/* Bubble */}
        <motion.div
          key={value} // ทำให้ animate ทุกครั้งที่ค่าเปลี่ยน
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-sm font-bold px-3 py-1 rounded-lg"
        >
          {value}
        </motion.div>

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="range range-primary w-full"
        />
      </div>
      <div className="relative w-80">
        {/* Bubble */}
        <motion.div
          animate={{ left: `${bubbleX}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute -top-10 -translate-x-1/2 bg-fuchsia-600 text-white text-sm font-bold px-3 py-1 rounded-lg"
        >
          {value}
        </motion.div>

        {/* Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="range range-primary w-full"
        />
      </div>

      <div className="relative w-80">
        {/* Bubble */}
        <motion.div
          animate={{
            left: `${bubbleX}%`,
            rotate: isDragging ? 15 : 0, // เอียงตอนลาก
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute -top-10 -translate-x-1/2 bg-fuchsia-600 text-white text-sm font-bold px-3 py-1 rounded-lg"
        >
          {value}
        </motion.div>

        {/* Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)} // mobile support
          onTouchEnd={() => setIsDragging(false)} // mobile support
          className="range range-primary w-full"
        />
      </div>
    </main>
  );
}
