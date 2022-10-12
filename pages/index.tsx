import type { NextPage } from "next";

import { useScroll } from "framer-motion";

import ResumeOverview from "../components/overview/resume/component";
import {
  AnimatedBlogOverview,
  AnimatedLandingOverview,
  AnimatedContactOverview,
  AnimatedProjectsOverview,
} from "../components/overview";
import { useState } from "react";
import styles from "../styles/index.module.css"

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const [zoomLevel, setZoomLevel] = useState(1);

  (this as any)?.window.matchMedia("(min-width: 768px)").addEventListener("change", (e: any) => {
    if (e.matches) {
      setZoomLevel(0.5);
    } else {
      setZoomLevel(0.8);
    }
  });

  return (
    <div
      className="w-[90vw] h-[300vh] overflow-x-hidden  p-0 m-0 "
      style={{
        zoom: zoomLevel,
        scrollbarWidth: "none",
      }}
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
