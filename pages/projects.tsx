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
            <motion.ul
              className="flex flex-row justify-between"
              variants={{
                hidden: { opacity: 1, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delayChildren: 0.15,
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <ProjectTile title="学中文" img={""} />
              <ProjectTile title="MADS" img={"https://www.marketads.me/favicon.ico"} />
              <ProjectTile title="PORTFOLIO" img={""} />
              <ProjectTile title="TOOLFRAME" img={""} />
              <ProjectTile title="学中文" img={""} />
              <ProjectTile title="学中文" img={""} />
              <ProjectTile title="学中文" img={""} />
              <ProjectTile title="学中文" img={""} />
            </motion.ul>
          </div>

          <motion.div
            className="pt-[10%] w-full px-[25%]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.025,
                },
              },
            }}
          >
            <motion.span
              className="mx-2 mb-5 text-2xl font-semibold"
              variants={{
                hidden: {
                  y: 200,
                  color: "transparent",
                  transition: {
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 5,
                  },
                },
                visible: {
                  y: 0,
                  color: "#FFFFFF",
                  transition: {
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 0.75,
                  },
                },
              }}
            >
              Recommended blog posts
            </motion.span>
            <motion.ul
              className="w-full grid grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delayChildren: 0.15,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <BlogTile />
              <BlogTile />
              <BlogTile />
              <BlogTile />
              <BlogTile />
              <BlogTile />
            </motion.ul>
          </motion.div>
        </div>
      </SafariWindow>
    </motion.div>
  );
};

function ProjectTile({
  title,
  img,
}: {
  title: string;
  img?: string | undefined;
}) {
  return (
    <motion.li
      className="flex flex-col mx-2"
      whileHover={{
        scale: 1.1,
      }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <div className="rounded-md overflow-hidden bg-red-50 h-24 w-24">
        {img ? (
          <Image src={img} layout="fill" objectFit="cover" />
        ) : (
          <div className="text-black font-extrabold h-full flex justify-center items-center bg-gradient-to-tr from-purple-600 to-pink-500">
            {title}
          </div>
        )}
      </div>
      <div className="rounded-md overflow-clip w-24 h-5 text-center mt-1">
        {title}
      </div>
    </motion.li>
  );
}

function BlogTile({}: {}) {
  return (
    <motion.li
      className="flex flex-row backdrop-blur-lg bg-white/30 p-5 rounded-xl m-2"
      whileHover={{
        scale: 1.05,
        borderRadius: "10px",
      }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
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
    </motion.li>
  );
}

export default ProjectsPage;
