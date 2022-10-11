import { MotionValue, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import MacOSWindow from "../../window/component";

function AnimatedOverviewTile({
  size,
  scale,
  x,
  y,
  children,
  destination,
}: {
  size: number;
  scale: MotionValue;
  x: MotionValue;
  y: MotionValue;
  children: JSX.Element;
  destination: string;
}): JSX.Element {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
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
          
          animate={
            {
              scale: isClicked ? 1.1 : scale.get(),
              x: isClicked ? 0 : x.get(),
              y: isClicked ? 0 : y.get(),
              padding: isClicked ? 0 : "1px",
              transition: {
                duration: 0.5
              }
            }
          }
          onTapStart={() => 
          {
            setIsClicked(true);
            setTimeout(() => {
            router.push(destination)
          }, 250)}
          }
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
