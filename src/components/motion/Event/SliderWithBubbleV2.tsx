"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import { useMotionValue, useTransform } from "motion/react";
export default function SliderWithBubbleV2() {
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const min = 0;
  const max = 100;

  // motion value สำหรับ slider
  const sliderValue = useMotionValue(value);

  // เปลี่ยนค่าตัวเลข slider → เปลี่ยนเป็นตำแหน่ง %
  const bubbleX = useTransform(sliderValue, (v) => {
    const percent = (v - min) / (max - min);
    return `${percent * 100}%`;
  });

  return (
    <main className="flex items-center justify-center h-screen bg-neutral">
      <div className="relative w-80">
        {/* Bubble */}
        <motion.div
          style={{ left: bubbleX }} // ใช้ motion value แทนค่า step
          animate={{ rotate: isDragging ? 45 : 0 }} // ตอนนี้ยังไม่ทำเอียง
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
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)} // mobile support
          onTouchEnd={() => setIsDragging(false)} // mobile support
          onChange={(e) => {
            const newVal = Number(e.target.value);
            setValue(newVal);
            sliderValue.set(newVal); // อัปเดต motion value ให้ animate ลื่น
          }}
          className="range range-primary w-full"
        />
      </div>
    </main>
  );
}
