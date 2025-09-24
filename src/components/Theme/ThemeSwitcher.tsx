"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { Theme } from "./type";

const themes: Theme[] = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
  "custom",
  "calm-day",
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const modal = (
    <dialog
      // portal แยกจาก header + ดัน z-index ให้สูง
      className={` font-Bangers  modal ${isOpen ? "modal-open" : ""} z-[60]`}
      onClick={() => setIsOpen(false)}
      aria-modal="true"
      aria-label="Theme selector"
    >
      <div className="modal-box max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl">Select Theme</h3>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {themes.map((t) => (
            <div
              data-theme={t} // เปลี่ยน theme ของการ์ดตามธีม
              key={t}
              className={`card bg-base-100 cursor-pointer hover:scale-105 transition-transform
                  ${theme === t ? "ring-2 ring-primary" : ""}`}
              onClick={() => {
                setTheme(t);
                setIsOpen(false);
              }}
            >
              <div className="card-body p-3 text-xl">
                {/* ชื่อ + จุดสีหลัก */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="capitalize text-base-content">{t}</span>
                </div>

                {/* Preview 4 สี */}
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <div className="h-3 w-full rounded bg-primary" />
                  <div className="h-3 w-full rounded bg-secondary" />
                  <div className="h-3 w-full rounded bg-accent" />
                  <div className="h-3 w-full rounded bg-neutral" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-circle btn-ghost"
        aria-label="Open theme switcher"
      >
        {/* ไอคอนดวงอาทิตย์/พระจันทร์แบบกลาง ๆ */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>

      {/* Portal ไป body เพื่อเลี่ยง stacking context ของ header */}
      {isOpen && createPortal(modal, document.body)}
    </>
  );
};

export default ThemeSwitcher;
