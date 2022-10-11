import type { NextPage } from "next";

import { useScroll } from "framer-motion";

import ResumeOverview from "../components/overview/resume/component";
import { AnimatedBlogOverview, AnimatedLandingOverview, AnimatedContactOverview, AnimatedProjectsOverview } from "../components/overview";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-[90vw] h-[300vh] overflow-x-hidden  p-0 m-0 "
    style={
      {
        zoom: 0.8,
      }
    }
    >
      <AnimatedLandingOverview scrollYProgress={scrollYProgress} />
      <AnimatedBlogOverview scrollYProgress={scrollYProgress} />
      <ResumeOverview scrollYProgress={scrollYProgress} />
      <AnimatedProjectsOverview scrollYProgress={scrollYProgress} />
      <AnimatedContactOverview scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Home;
