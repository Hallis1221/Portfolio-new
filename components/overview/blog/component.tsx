import { motion, MotionValue, useTransform } from "framer-motion";
import AnimatedOverviewTile from "../tile/component";

function AnimatedBlogOverview({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue;
}): JSX.Element {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.25]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const y = useTransform(scrollYProgress, [0, 1], [-1500, -350]);

  const size = 100;

  return (
    <AnimatedOverviewTile scale={scale} x={x} y={y} size={size}
    destination="/blog"
    >
    <text
      className="font-extrabold text-9xl"
      style={{
        lineHeight: "1",
        fontSize: `${8 * (size / 100)}rem`,
      }}
    >
      Blog
    </text>
  </AnimatedOverviewTile>
  );
}

export default AnimatedBlogOverview;
