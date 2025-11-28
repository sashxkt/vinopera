"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cursors = [
  { id: 1, name: "Alice", color: "#FF5722", x: 200, y: 300 },
  { id: 2, name: "Bob", color: "#2196F3", x: 800, y: 150 },
  { id: 3, name: "Charlie", color: "#4CAF50", x: 500, y: 600 },
];

export default function CursorOverlay() {
  const [cursorPositions, setCursorPositions] = useState(cursors);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPositions((prev) =>
        prev.map((cursor) => ({
          ...cursor,
          x: cursor.x + (Math.random() - 0.5) * 100,
          y: cursor.y + (Math.random() - 0.5) * 100,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {cursorPositions.map((cursor) => (
        <motion.div
          key={cursor.id}
          className="absolute flex items-start gap-2"
          animate={{ x: cursor.x, y: cursor.y }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: cursor.color }}
          >
            <path
              d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z"
              fill={cursor.color}
              stroke="white"
            />
          </svg>
          <span
            className="px-2 py-1 rounded-full text-xs font-bold text-white shadow-sm"
            style={{ backgroundColor: cursor.color }}
          >
            {cursor.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
