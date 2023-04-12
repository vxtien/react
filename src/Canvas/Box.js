import { useState } from "react";

const Box = ({ color, position, onMove, children }) => {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handlePointerMove = (e) => {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  };

  const handlePointerUp = () => {
    setLastCoordinates(null);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        boder: "1px solid black",
        display: "flex",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
                    ${position.x}px,
                    ${position.y}px
                )`,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
