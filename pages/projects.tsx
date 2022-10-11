import MacOSWindow from "../components/window/component";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.div className="h-screen w-full"
    style={
      {
        size: 1.1
      }
    }
    >
      <MacOSWindow full>
        <div
          className="h-full w-full flex justify-center"
          style={{
            marginTop: `${15}%`,
          }}
        >
        
            <text
              className="font-extrabold text-9xl"
              style={{
                lineHeight: "1",
                fontSize: `${8}rem`,
              }}
            >
              Projects
            </text>
        </div>
      </MacOSWindow>
    </motion.div>
  );
}

export default ProjectsPage;