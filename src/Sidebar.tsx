import { useState, useEffect, useRef } from "react";

export default function Sidebar() {
  const [width, setWidth] = useState(450);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => previousWidth + e.movementX);
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);

  return (
    <div className="flex bg-green-500">
      <div style={{ width: `${width / 16}rem` }}>Sidebar</div>

      {/* Handle */}
      <div
        className="w-4 cursor-col-resize bg-blue-500"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>
  );
}