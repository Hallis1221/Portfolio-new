import { MotionValue, motion } from "framer-motion";
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
  return (
    <div className="absolute">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          display: "flex",
          pointerEvents: "none",
          zIndex: 150,
        }}
      >
        <div className="h-full w-full flex-grow-0 absolute pointer-events-none" />

        <motion.div
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
