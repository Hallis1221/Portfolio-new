import MacOSWindow from "../components/window/component";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.div
      className="h-screen w-full"
      style={{
        size: 1.1,
      }}
    >
      <MacOSWindow full>
        <div
          className="h-full flex flex-col items-center"
          style={{
            marginTop: `${5}%`,
          }}
        >
          <div>
            <div className="mx-2 mb-5 text-2xl font-semibold">Projects</div>
            <div className="flex flex-row">
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
              <ProjectTile title="学中文" />
            </div>
          </div>

          <div className="mt-[10%]">
            <div className="mx-2 mb-5 text-2xl font-semibold">
              Recommended blog posts
            </div>
            <div className="flex flex-row w-96">
              <div className="flex flex-row backdrop-blur-sm bg-white/30 p-5 rounded-xl">
                <div className="flex flex-col">
                  <div className="font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1665510392901-2ca57b159f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    width={75}
                    height={75}
                    layout="fixed"
                    objectFit="cover"
                    className="rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MacOSWindow>
    </motion.div>
  );
};

function ProjectTile({ title }: { title: string }) {
  return (
    <div className="flex flex-col mx-2">
      <div className="rounded-md overflow-hidden bg-red-50 h-24 w-24">
        <Image
          src="https://images.unsplash.com/photo-1665510392901-2ca57b159f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          width={100}
          height={100}
          layout="responsive"
          alt=""
        />
      </div>
      <div className="rounded-md overflow-clip w-24 h-5 text-center mt-1">
        {title}
      </div>
    </div>
  );
}

export default ProjectsPage;
