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
          animate={{
            scale: isClicked ? 1 : undefined,
            x: isClicked ? 0 : undefined,
            y: isClicked ? 0 : undefined,
            zIndex: isClicked ? 50 : undefined,
            padding: isClicked ? 0 : "1px",
            transition: {
              duration: 0.5,
              ease: "easeIn",
              bounce: 0.5,
            },
          }}
          onTapStart={() => {
            if (destination === "/" && router.pathname === "/") {
              scrollTo(window.scrollY - 1);
            }
            setIsClicked(true);
            setTimeout(() => {
              router.push(destination);
              setTimeout(() => {
                setIsClicked(false);
              }, 500);
            }, 500);
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
function scrollTo(pos: number) {
  console.log(pos);
  window.scrollTo(0, pos);
  if (pos > 0) setTimeout(() => scrollTo(pos - 10), 1);
}
export default AnimatedOverviewTile;
