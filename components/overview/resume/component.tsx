import { MotionValue, useTransform } from "framer-motion";
import AnimatedOverviewTile from "../tile/component";

function ResumeOverview({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue;
}): JSX.Element {
  const scale = useTransform(scrollYProgress, [0, 1], [0, 0.6]);
  const x = useTransform(scrollYProgress, [0, 1], [2000, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const size = 100;

  return (
    <AnimatedOverviewTile scale={scale} x={x} y={y} size={size}
    destination="/resume"
    >
    <text
      className="font-extrabold text-9xl"
      style={{
        lineHeight: "1",
        fontSize: `${8 * (size / 100)}rem`,
      }}
    >Resume</text>
  </AnimatedOverviewTile>
  );
}

export default ResumeOverview;
