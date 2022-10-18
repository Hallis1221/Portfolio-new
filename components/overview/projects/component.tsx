import { MotionValue, useTransform, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import SafariWindow from "../../window/safari/component";

function ProjectsOverviewAnimated({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue;
}): JSX.Element {
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y = useTransform(scrollYProgress, [0, 1], [-1500, 150]);

  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const size = 100;

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
            setIsClicked(true);
            setTimeout(() => {
              router.push("/projects");
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
          <SafariWindow full>
            <div
              className="h-full w-full flex justify-center"
              style={{
                marginTop: `${
                  size >= 25 ? 15 * (size / 100) : 15 * (size / 50)
                }%`,
              }}
            >
              <motion.text
                animate={{
                  x: 0,
                  y: 0,
                  scale: isClicked ? 0.1 : 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                    bounce: 0.5,
                  },
                }}
                style={{
                  lineHeight: "1",
                  fontSize: `${8 * (size / 100)}rem`,
                  fontWeight: "bolder"

                }}
              >
                Projects
              </motion.text>
            </div>
          </SafariWindow>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsOverviewAnimated;
