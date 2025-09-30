"use client";
import { useEffect, useRef } from "react";
import { animate } from "motion";
import * as motion from "motion/react-client";

interface Step {
  keyframes: Record<string, any>; // เช่น { x: [0, 50, 0] }
  options?: any; // เช่น { duration: 1 }
}

interface MotionSequenceButtonProps {
  steps: Step[];
  loop?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function MotionSequenceButton({
  steps,
  loop = true,
  children,
  className = "btn btn-primary w-fit",
}: MotionSequenceButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const runSequence = async () => {
      if (!btnRef.current) return;

      for (const step of steps) {
        await animate(btnRef.current, step.keyframes, step.options).finished;
      }

      if (loop) runSequence();
    };

    runSequence();
  }, [steps, loop]);

  return (
    <motion.button ref={btnRef} className={className}>
      {children}
    </motion.button>
  );
}
