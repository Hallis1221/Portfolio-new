import { MotionValue, useTransform } from "framer-motion";
import AnimatedOverviewTile from "../tile/component";

function ProjectsOverviewAnimated({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue;
}): JSX.Element {
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 0.6]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y = useTransform(scrollYProgress, [0, 1], [-1500, 150]);

  const size = 100;

  return (
    <AnimatedOverviewTile scale={scale} x={x} y={y} size={size}
    destination="/projects"
    >
      <text
        className="font-extrabold text-9xl"
        style={{
          lineHeight: "1",
          fontSize: `${8 * (size / 100)}rem`,
        }}
      >
        Projects
      </text>
    </AnimatedOverviewTile>
  );
}

export default ProjectsOverviewAnimated;
