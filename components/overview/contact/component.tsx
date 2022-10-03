import {  MotionValue, useTransform } from "framer-motion";
import AnimatedOverviewTile from "../tile/component";

function AnimatedContactOverview({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue;
}): JSX.Element {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.45]);
  const x = useTransform(scrollYProgress, [0, 1], [2500, 500]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const size = 100;

  return (
    <AnimatedOverviewTile scale={scale} x={x} y={y} size={size}>
    <text
      className="font-extrabold text-9xl"
      style={{
        lineHeight: "1",
        fontSize: `${8 * (size / 100)}rem`,
      }}
    >
      Contact
    </text>
  </AnimatedOverviewTile>
  );
}

export default AnimatedContactOverview;