import MacOSWindow from "../components/window/component";
import Image from "next/image";
import { motion } from "framer-motion";
import SafariWindow from "../components/window/safari/component";

const ProjectsPage = () => {
  return (
    <motion.div
      className="h-screen w-full "
      style={{
        size: 1.1,
      }}
    >
      <SafariWindow full>
        <div
          className="h-full flex flex-col items-center text-white"
          style={{
            paddingTop: `${5}%`,
          }}
        >
          <div className="w-full px-[25%] ">
            <div className="w-full mx-2 mb-5 text-2xl font-semibold">
              Projects
            </div>
            <div className="flex flex-row justify-between">
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

          <div className="pt-[10%] w-full px-[25%]">
            <div className="mx-2 mb-5 text-2xl font-semibold">
              Recommended blog posts
            </div>
            <div className="w-full grid grid-cols-3  ">
              <BlogTile />
              <BlogTile />
              <BlogTile />
              <BlogTile />
              <BlogTile />
              <BlogTile />
            </div>
          </div>
        </div>
      </SafariWindow>
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

function BlogTile({}: {}) {
  return (
    <div className="flex flex-row backdrop-blur-lg bg-white/30 p-5 rounded-xl m-2">
      <div className="flex flex-col">
        <div className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="text-gray-300 text-sm">Lorem ipsum dolor sit amet.</div>
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
  );
}

export default ProjectsPage;
