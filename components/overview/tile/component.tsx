import { MotionValue, motion } from "framer-motion";
import { useState } from "react";
import MacOSWindow from "../../window/component";

function AnimatedOverviewTile({
  size,
  scale,
  x,
  y,
  children,
}: {
  size: number;
  scale: MotionValue;
  x: MotionValue;
  y: MotionValue;
  children: JSX.Element;
}): JSX.Element {
  const [initialScale, setInitialScale] = useState(scale.get());
  return (
    <div className="absolute hover:z-50 ">
      <div
  
     
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          display: "flex",
          pointerEvents: "none",
        }}
        
      >
        <div className="h-full w-full flex-grow-0 absolute pointer-events-none" />

        <motion.div
        
          onHoverStart={(e) => {
            setInitialScale(scale.get());
            scale.set(initialScale + 0.01);
          }}
          onHoverEnd={(e) => {
            scale.set(initialScale);
          }}
          style={{
            scale,
            x,
            y,
            width: "100%",
            height: "100%",
            padding: "1px",
            pointerEvents: "all",
          }}
        >
          <MacOSWindow full>
            <div
              className="h-full w-full flex justify-center"
              style={{
                marginTop: `${
                  size >= 25 ? 15 * (size / 100) : 15 * (size / 50)
                }%`,
              }}
            >
              {children}
            </div>
          </MacOSWindow>
        </motion.div>
      </div>
    </div>
  );
}

export default AnimatedOverviewTile;
