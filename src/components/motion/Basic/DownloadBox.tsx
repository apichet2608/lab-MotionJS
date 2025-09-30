"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import * as motion from "motion/react-client";
import { Download } from "lucide-react";

export default function DownloadBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Entrance effect
    if (!boxRef.current) return;
    animate(boxRef.current, { opacity: [0, 1], y: [50, 0] }, { duration: 0.8 });
  }, []);

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setProgress(0);

    // fake loading
    for (let i = 1; i <= 100; i++) {
      await new Promise((res) => setTimeout(res, 30)); // จำลองโหลด
      setProgress(i);
    }

    setTimeout(() => {
      setIsDownloading(false);
      alert("✅ Download Completed!");
    }, 500);
  };

  return (
    <motion.div
      ref={boxRef}
      className="card w-96 bg-base-100 shadow-xl border border-base-300 p-6"
    >
      <h2 className="text-xl font-bold mb-2">Download Report</h2>
      <p className="text-base-content/70 mb-4">
        กดปุ่มด้านล่างเพื่อดาวน์โหลดรายงานของคุณ
      </p>

      <motion.button
        ref={btnRef}
        onClick={handleDownload}
        disabled={isDownloading}
        className="btn btn-primary w-full flex items-center gap-2 text-lg disabled:opacity-70"
      >
        <Download size={20} />
        {isDownloading ? "Downloading..." : "Download"}
      </motion.button>

      {isDownloading && (
        <div className="w-full mt-4 h-3 bg-base-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
