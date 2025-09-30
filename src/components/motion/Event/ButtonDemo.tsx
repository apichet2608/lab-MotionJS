"use client";
import { animate } from "motion";

export default function ButtonDemo() {
  const handleClick = () => {
    animate("#btn", { y: [0, 10, -10, 0] }, { duration: 0.4 });
  };

  return (
    <div className="flex gap-2">
      <button id="btn" onClick={handleClick} className="btn btn-primary">
        Click Me
      </button>
      <button
        id="hoverBtn"
        onClick={handleClick}
        className="btn btn-secondary"
        onMouseEnter={() =>
          animate(
            "#hoverBtn",
            { scale: [1, 1.2, 1] },
            { duration: 0.3, ease: "linear" }
          )
        }
      >
        Hover Me
      </button>
    </div>
  );
}
