import { useState, useEffect, useRef } from "react";



const [minWidth, maxWidth, defaultWidth] = [200, 500, 350];

export default function Sidebar() {
  const [width, setWidth] = useState(defaultWidth);
  const isResized = useRef(false);

  
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }
      
      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX/2000 ;

        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
    
        return isWidthInRange ? newWidth : previousWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);

  return (
    <div className="flex bg-green-500">
      <div style={{ width: `${width/16}rem` }}>Sidebar</div>

      {/* Handle */}
      <div
        className="w-1 cursor-ew-resize bg-blue-500"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
      
    </div>
  );
}