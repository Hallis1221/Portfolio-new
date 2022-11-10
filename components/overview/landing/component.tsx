import { motion, MotionValue, useTransform } from "framer-motion";
import AnimatedOverviewTile from "../tile/component";

function AnimatedLanding({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue;
}): JSX.Element {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.2]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const size = 100;

  return (
    <div
    className="bg-red-500"
  >
    <AnimatedOverviewTile scale={scale} x={x} y={y} size={size}
    destination="/"
    >
    <text
      className="font-extrabold text-9xl"
     
      style={{
        lineHeight: "1",
        fontSize: `${8 * (size / 100)}rem`,
      }}
    >
 skroll nedover
    </text>
  </AnimatedOverviewTile>
  </div>
  );
}

export default AnimatedLanding;